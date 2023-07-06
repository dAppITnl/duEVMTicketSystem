const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "duEVMTicketSystem"
  const SYMBOL = "TS"

  // Deploy contract
  const duEVMTicketSystem = await ethers.getContractFactory("duEVMTicketSystem")
  const duEVMTicketSystem = await duEVMTicketSystem.deploy(NAME, SYMBOL)
  await duEVMTicketSystem.deployed()

  console.log(`Deployed duEVMTicketSystem Contract at: ${duEVMTicketSystem.address}\n`)

  // List 6 events
  const occasions = [
    {
      name: "The Bodyguard",
      cost: tokens(34),
      tickets: 0,
      date: "Aug 06",
      time: "14:00PM CEST",
      location: "Utrecht, NL"
    },
    {
      name: "SingCity",
      cost: tokens(14),
      tickets: 125,
      date: "Aug 23",
      time: "11:00AM CEST",
      location: "Bontehond, Amsterdam, NL"
    },
    {
      name: "Grease - The Musical",
      cost: tokens(47.50),
      tickets: 50,
      date: "Aug 23",
      time: "20:00PM CEST",
      location: "Utrecht, NL"
    },
    {
      name: "Concerten in het Vondelpark Openluchttheater",
      cost: tokens(0),
      tickets: 500,
      date: "Sep 03",
      time: "15:00PM CEST",
      location: "Vondelpark, Amsterdam, NL"
    },
    {
      name: "Conservatorium Harmonieorkest",
      cost: tokens(20),
      tickets: 125,
      date: "Oct 12",
      time: "20:00PM CEST",
      location: "Maastricht, NL"
    }
  ]

  for (var i = 0; i < 5; i++) {
    const transaction = await duEVMTicketSystem.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});