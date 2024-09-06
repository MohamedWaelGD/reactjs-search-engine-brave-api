export interface VideoResult {
    contents: Content[]
    cursorNext: string
    didYouMean: any
    estimatedResults: number
    filterGroups: FilterGroup[]
    refinements: string[]
  }
  
  export interface Content {
    type: string
    video?: Video
    playlist?: Playlist
  }
  
  export interface Video {
    author: Author
    badges: string[]
    descriptionSnippet?: string
    isLiveNow: boolean
    lengthSeconds: number
    movingThumbnails?: MovingThumbnail[]
    publishedTimeText?: string
    stats: Stats
    thumbnails: Thumbnail[]
    title: string
    videoId: string
  }
  
  export interface Author {
    avatar: Avatar[]
    badges: Badge[]
    canonicalBaseUrl?: string
    channelId: string
    title: string
  }
  
  export interface Avatar {
    height: number
    url: string
    width: number
  }
  
  export interface Badge {
    text: string
    type: string
  }
  
  export interface MovingThumbnail {
    height: number
    url: string
    width: number
  }
  
  export interface Stats {
    views: number
  }
  
  export interface Thumbnail {
    height: number
    url: string
    width: number
  }
  
  export interface Playlist {
    author: Author2
    playlistId: string
    stats: Stats2
    thumbnails: Thumbnail2[]
    title: string
    updatedTime: string
    updatedTimeText: string
  }
  
  export interface Author2 {
    badges: Badge2[]
    canonicalBaseUrl: string
    channelId: string
    title: string
  }
  
  export interface Badge2 {
    text: string
    type: string
  }
  
  export interface Stats2 {
    videos: number
  }
  
  export interface Thumbnail2 {
    height: number
    url: string
    width: number
  }
  
  export interface FilterGroup {
    filters: Filter[]
    title: string
  }
  
  export interface Filter {
    cursorSelect?: string
    label: string
    selected: boolean
  }
  