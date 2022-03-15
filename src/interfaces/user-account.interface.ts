export interface UserAccount {
    User_ID?: number;
    U_First_Name: string;
    U_Middle_Name: string;
    U_Last_Name: string;
    Username: string;
    Password: string;
    Gender: string;
    U_Birth_Date: string;
    Address: string;
    U_Contact_Number: string;
    User_Type: 'librarian' | 'admin';
    U_Status: 'active' | 'inactive';
}
