export interface Reservation{
    user_id: string;
    group_name: string;
    account_count: number;
    start_date: Date;
    end_date: Date;
    request_info: string;
    status: string;
}