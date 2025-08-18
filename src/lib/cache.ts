//let's make caching by tag and revalidate cache using this tag
import {cache as reactCache} from 'react'
import { unstable_cache as nextCache } from 'next/cache'


type Callback = (...args: any) => any;



export  function cache<T extends Callback>(cb:T
    ,keyParts:string[],
    options:{revalidate?:number|false,tags?:string}){
return nextCache(reactCache(cb),keyParts,)

}