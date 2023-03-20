

export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: "user"|"admin";
  status: "active"|"inactive";
  createdAt: Date;
  updatedAt: Date;
  token: string
}
