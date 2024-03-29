export interface CommunityTabsData {
  id: string;
  name: string;
  cover?: string;
  cover_image?: string;
  description: string;
  comm_admin: string | null;
}

export interface CommunitiesData {
  communityTabs: CommunityTabsData[];
}
