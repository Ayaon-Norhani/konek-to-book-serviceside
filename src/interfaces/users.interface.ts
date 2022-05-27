export interface Users {
  id?: number;
  U_First_Name: string;
  U_Middle_Name: string;
  U_Last_Name: string;
  username?: string;
  password?: string;
  Gender: string;
  U_Birth_Date: string;
  Address: string;
  U_Contact_Number: string;
  email?: string;
  User_Type?: 'admin' | 'librarian';
  User_Status: 'active' | 'inactive';
  url: string;

  // User_ID?: number;
  // Username: string;
  // Password: string;
  // User_Type: 'librarian' | 'admin';
  // U_Status: 'active' | 'inactive';
}
