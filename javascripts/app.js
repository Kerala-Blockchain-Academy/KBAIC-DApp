function connectToMetMask() {
    ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        console.log("Account: ", result);
    })
}

async function getJSON() {
    try {
        const response = await fetch("build/contracts/Certi.json");
        const json = await response.json();
        console.log(json.networks['5777'].address);
        return json;
    }
    catch (err) {
        console.log(err)
    }

}


$(document).ready(async function () {

    MyContractJSON = await getJSON();

    console.log("COntract JSON: ", MyContractJSON);

    web3 = new Web3(ethereum);
    console.log("Connection Object: ", web3)

    const contractAddress = "0x9Dc442323EbA915a366B4e11f87155dFCB8FA286";
    const contractAbi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "certificateCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "certificateDetails",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "certificateId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                }
            ],
            "name": "newCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    console.log("HAi", contractAbi)

    myContract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log("Contract Object: ", myContract)
})
