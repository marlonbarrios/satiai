# Sati AI

This is a working branch fo Sati AI.

## TODO

1. Figure out how to render token by token when using a reducer so that people don't wait so long for responses.
2. Deploy on a testnet, write a subgraph to fetch NFTs, display the conversations in those NFTs.

We are deeply indebted to the [🏗 Scaffold-ETH](https://github.com/scaffold-eth/scaffold-eth-2/) for providing such an awesome framework to play with. By following the link above, you can read more about how to use what they have made more extensively. We'll simply include the information necessary to run the code in this repo for brevity.

### Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

### Get Started

To get started, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/andytudhope/satiai.git
cd satiai
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts`. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.

If you learn from videos better than you do from text, we recommend you sit back, relax, and enjoy [Austin explaining everything here](https://youtu.be/98gMdk5oWmc). Austin will give a great sense of how to begin messing around with this contract and getting it into a state where it has everything you need and nothing you don't.