import { getBaseEmail } from './service/email';

async function main() {
    let myEmail: String = await getBaseEmail('Cabral');

    console.log(myEmail);
}

main(); 