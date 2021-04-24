export interface Task{
    task_id?: number;
    task_title: string;
    task_description: string;
    task_image_url?: string;
    task_created_at?: string;
    task_deleted?: boolean;
    user_user_id?: number;
}