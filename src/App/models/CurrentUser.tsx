export interface currentUser {
    email: string;
    id: number;
    member: {
        avatar: string | null;
        id: number;
        id_socio_infonavit: string;
        lastname: string;
        mobile: number | string | null;
        name: string;
        subscribed_to_newsletter: boolean;
        user_id: number;
        zipcode: number | string | null;
    };
    role: string;
    sing_in_count: number;
}