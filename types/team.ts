export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoAlt: string;
  linkedin: string;
  department: "leadership" | "directors" | "associate-directors" | "management" | "legal";
}
