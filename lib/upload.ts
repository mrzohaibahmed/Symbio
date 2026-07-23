export interface StoredFile {
  fileName: string;
  storedName: string;
  path: string;
  mimeType: string;
  size: number;
}

export interface FileStorage {
  saveResume(file: File | Blob, originalName: string, mimeType: string): Promise<StoredFile>;
}

/**
 * Local filesystem storage for resumes.
 * Swap this implementation for S3/Cloudinary without changing callers.
 */
export class LocalFileStorage implements FileStorage {
  async saveResume(
    file: File | Blob,
    originalName: string,
    mimeType: string,
  ): Promise<StoredFile> {
    const { mkdir, writeFile } = await import("fs/promises");
    const { join } = await import("path");
    const { randomUUID } = await import("crypto");

    const uploadsDir = join(process.cwd(), "uploads", "resumes");
    await mkdir(uploadsDir, { recursive: true });

    const extension = originalName.includes(".")
      ? originalName.slice(originalName.lastIndexOf("."))
      : "";
    const storedName = `${Date.now()}_${randomUUID()}${extension}`;
    const path = join(uploadsDir, storedName);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path, buffer);

    return {
      fileName: originalName,
      storedName,
      path,
      mimeType,
      size: buffer.byteLength,
    };
  }
}

export const fileStorage: FileStorage = new LocalFileStorage();
