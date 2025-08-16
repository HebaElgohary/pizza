//let's make caching by tag and revalidate cache using this tag
import {cache as reactCache} from 'react'
import { unstable_cache as nextCache } from 'next/cache'


type Callback = (...args: unknown[]) => Promise<unknown>;



export function cache(cb:Callback
    ,keyParts:string[],
    options:{revalidate?:number|false,tags?:string}){
return nextCache(reactCache(cb),keyParts,)

}