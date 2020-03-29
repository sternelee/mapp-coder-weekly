export interface TextType {
  tag: string
  text: string
}

export interface NodeType {
  tag: string
  attrs: {
    [key: string]: string
  }
  nodes: NodeType[] | TextType[]
}