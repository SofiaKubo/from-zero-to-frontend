import 'isomorphic-fetch';

import { mapErrors } from './lib/mapErrors';

async function doFetch() {
    try {
        const result = await fetch('some-api');

        console.log(result);
    } catch (e) {
        const errorText = mapErrors(e);

        console.error(errorText);
    }
}

doFetch();