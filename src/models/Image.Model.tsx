export interface ImageRequest {
    status: string
    request_id: string
    parameters: Parameters
    data: Daum[]
  }
  
  export interface Parameters {
    query: string
    region: string
    safe_search: string
    size: string
    color: string
    type: string
    file_type: string
    time: string
    aspect_ratio: string
    usage_rights: string
  }
  
  export interface Daum {
    id: string
    title: string
    url: string
    width: number
    height: number
    size: string
    background_color: string
    thumbnail_url: string
    thumbnail_width: number
    thumbnail_height: number
    source: string
    source_url: string
    source_domain: string
    position: number
    rank: number
  }
  