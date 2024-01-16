const APICall = async () => {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption')
    console.log(await promise.text())
}

APICall()