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
  text?: string
}

export const BlockTags = 'br,address,article,applet,aside,audio,blockquote,canvas,center,dd,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video';

export const InlineTags = ['a', 'text', 'image']

// export const InlineTags = 'a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'.split(',')