export interface IFriendRequestRepository {
    getReceivedRequestsByUserId(id: string): Promise<string[]>;
    getAllRequestedPeopleById(id: string): Promise<string[]>;
    handleFriendRequestChange(receiverId: string, senderId: string, accepted: boolean): Promise<boolean>;
    addFriendRequest(firstUserId: string, secondUserId: string): Promise<boolean> 
}