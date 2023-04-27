import type { PageServerLoad } from './$types';

import axios from 'axios';
import Papa from 'papaparse';

const url = 'https://docs.google.com/spreadsheets/d/1Xn058JYBuDPN9ZsGI4kV1ZT79OkVnSrVAUXdyT2-SMc/export?format=csv&gid=0';

export const load = (async() => {
    let ret: any = {};
    await axios.get(url).then(
        (data) => {
             Papa.parse(data.data, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    ret = result;
                }
            });
        }
    )
    // console.log(ret);
    return {videos: ret}; 
}) satisfies PageServerLoad;
