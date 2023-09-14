import fetch from 'node-fetch';

const broadBrandIpRange = "103.138.145.";

const checkServer = async (ip)=>{
    try{
        const response = await fetch(`http://${ip}`, { method: 'HEAD' });
        if(response.ok){
            console.log(`Server Found at http://${ip}`)
        }
    }
    catch(error){
        console.log(error, "Server Not Found")
    }
}

const scanBroadBand = async()=>{
    let server = []
    for(let i = 1; i <=255; i++){
        const ip = `${broadBrandIpRange}${i}`;
        server+=ip
        console.log(server)
        await checkServer(ip)
    }
}

scanBroadBand()