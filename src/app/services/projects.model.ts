export enum MediaType {
    Video = 'video',
    Image = 'image',
    YouTube = 'youTube',
    Text = 'text',
    Title = 'title',
  }
  export interface Project {
    title: string;
    brand: string;
    description: DescriptionRow[];
    image: string;
    id: number;
    items?: MediaItem[];
  }
  
  export interface DescriptionRow {
    text: string;
  }
  
  export interface MediaItem {
    type: MediaType;
    path?: string;
    youtubeId?: string;
    description?: DescriptionRow[];
    text?: string;
    title?: string;
  }
  