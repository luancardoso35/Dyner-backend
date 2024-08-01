export interface IFriendRequestRepository {
    getReceivedRequestsById(id: string): Promise<string[]>;
    handleFriendRequestChange(receiverId: string, senderId: string, accepted: boolean): Promise<boolean>;
    addFriendRequest(firstUserId: string, secondUserId: string): Promise<boolean> 
}