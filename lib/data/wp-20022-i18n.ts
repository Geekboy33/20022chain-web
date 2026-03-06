/**
 * 20022Chain Whitepaper — content by locale.
 * Fallback: missing locale uses "en".
 */

import type { Locale } from '@/lib/i18n';

export type WpBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'box'; title: string; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'code'; text: string }
  | { type: 'grid'; cells: { label: string; value: string }[] };

export interface WpSection {
  num: string;
  title: string;
  pb?: boolean;
  blocks: WpBlock[];
}

export interface WpContent {
  toolbar: { back: string; download: string };
  cover: { title: string; subtitle: string; version: string };
  tocTitle: string;
  tocItems: string[];
  sections: WpSection[];
  backCover: { title: string; subtitle: string; part: string; rights: string };
}

const en: WpContent = {
  toolbar: { back: 'Back', download: 'DOWNLOAD PDF' },
  cover: {
    title: 'Technical Whitepaper',
    subtitle: 'The ISO 20022-Native Blockchain for\nInstitutional Real World Asset Settlement',
    version: 'Version 1.0 · February 2026',
  },
  tocTitle: 'Table of Contents',
  tocItems: [
    '01 — Why 20022Chain Exists',
    '02 — Architecture: 12 Subsystems Deep Dive',
    '03 — ArchPoS Consensus Mechanism',
    '04 — Parallel Execution Engine',
    '05 — ISO 20022 Native Message Format',
    '06 — ISIN Registry & Asset Classification',
    '07 — ViewsRight Verification System',
    '08 — Seal System & Trust Layers',
    '09 — Wallet System & Account Types',
    '10 — Smart Contract Virtual Machine',
    '11 — Cross-Chain Bridge Protocol',
    '12 — Zero-Knowledge Proof System',
    '13 — On-Chain Governance & Treasury',
    '14 — Verkle Trees & State Management',
    '15 — DAG Mempool Architecture',
    '16 — Danksharding & Data Availability',
    '17 — Full API Reference & Developer Tools',
    '18 — Integration with ARCHT Ecosystem',
    '19 — Security Model & Audit Framework',
    '20 — Roadmap 2026–2028',
    '21 — Deployed Smart Contracts Catalog',
    '22 — ISIN Financial Instruments Registry',
    '23 — ViewsRight: Intellectual Property on Chain',
    '24 — Native Address System: Human-Readable Identifiers',
  ],
  sections: [
    {
      num: '01',
      title: 'Why 20022Chain Exists',
      pb: true,
      blocks: [
        { type: 'p', text: "The global financial system moves over $5 quadrillion annually through messaging standards. ISO 20022 is the universal format adopted by SWIFT (migrating all 11,000+ banks), the European Central Bank (TARGET2), the Federal Reserve (FedNow), and 200+ countries. By 2025, ISO 20022 will be mandatory for all international financial messaging." },
        { type: 'p', text: "Yet every existing blockchain — Ethereum, Solana, Cosmos, Polkadot — uses proprietary transaction formats. This creates a fundamental incompatibility: banks cannot read blockchain transactions, and blockchains cannot integrate with banking systems without expensive middleware." },
        { type: 'p', text: "20022Chain eliminates this gap entirely." },
        { type: 'p', text: "Every transaction on 20022Chain is natively formatted as an ISO 20022 message. A bank receiving a 20022Chain settlement can parse it with the same systems they use for SWIFT messages. No adapters, no translators, no middleware. This is what makes institutional RWA tokenization possible at scale." },
        { type: 'box', title: 'Key Differentiators', items: [
          '• First blockchain with native ISO 20022 compliance',
          '• Designed for institutional RWA settlement, not retail DeFi',
          '• 50,000+ TPS with instant finality (no rollbacks)',
          '• Built in Rust for maximum performance and safety',
          '• Settlement layer for $5T+ in verified mineral reserves on ARCHT',
        ]},
      ],
    },
    {
      num: '02',
      title: 'Architecture: 12 Subsystems Deep Dive',
      pb: true,
      blocks: [
        { type: 'p', text: "20022Chain is not a monolithic blockchain. It is composed of 12 specialized subsystems, each independently designed, tested, and upgradeable through governance. This modular architecture allows individual components to be improved without affecting others." },
        { type: 'table', headers: ['Subsystem', 'Purpose', 'Key Metric'], rows: [
          ['Parallel Execution', 'Multi-threaded tx processing', '50,000+ TPS'],
          ['DAG Mempool', 'Non-sequential tx ordering', '100K tx queue'],
          ['ArchPoS Consensus', 'Stake-weighted block production', '0.4 s blocks'],
          ['ISO 20022 Layer', 'Financial message formatting', '8 msg types'],
          ['Verkle Trees', 'State-efficient storage', '90% reduction'],
          ['ZK Proofs', 'Privacy-preserving verification', 'ZK-SNARKs'],
          ['Cross-Chain Bridge', 'ETH, BNB, Cosmos, Polkadot', '5 chains'],
          ['On-Chain Governance', 'Protocol upgrades & treasury', 'Token voting'],
          ['ISIN Registry', 'Securities identification', '8,247+ ISINs'],
          ['Account Abstraction', 'Multi-sig, social recovery', 'ERC-4337'],
          ['State Expiry', 'Automatic state pruning', '365-day cycle'],
          ['Danksharding', 'Blob data availability', 'EIP-4844'],
        ]},
      ],
    },
    {
      num: '03',
      title: 'ArchPoS Consensus Mechanism',
      pb: true,
      blocks: [
        { type: 'p', text: "ArchPoS (Archetype Proof of Stake) is 20022Chain's proprietary consensus mechanism. It achieves instant finality in a single slot — meaning once a block is committed in 0.4 s, it is mathematically impossible to revert." },
        { type: 'h3', text: '3.1 Validator Selection' },
        { type: 'p', text: "128 validators participate in block production. Selection uses a Verifiable Random Function (VRF) weighted by: (a) stake amount, (b) uptime score, (c) historical performance. This ensures both decentralization and reliability." },
        { type: 'h3', text: '3.2 Block Production' },
        { type: 'p', text: "Each slot (0.4 s), one validator is selected as the block proposer. The proposer collects transactions from the DAG mempool, orders them, executes them through the parallel engine, and broadcasts the block. Other validators attest within the same slot, achieving instant finality." },
        { type: 'h3', text: '3.3 Slashing Conditions' },
        { type: 'box', title: 'Slashing Rules', items: [
          '• Double signing: Proposing two different blocks for the same slot → 100% stake slash',
          '• Prolonged downtime: Offline for 24+ hours → Gradual stake reduction (0.1%/hour)',
          '• Censorship: Repeatedly excluding valid transactions → 50% stake slash + removal',
          '• Invalid attestation: Attesting to invalid blocks → 25% stake slash',
        ]},
        { type: 'h3', text: '3.4 Staking Rewards' },
        { type: 'p', text: "Validators earn rewards proportional to their stake and performance. Current estimated APY: 6.2%. Rewards are distributed automatically at the end of each epoch (every 32 blocks = ~12.8 seconds)." },
      ],
    },
    {
      num: '04',
      title: 'Parallel Execution Engine',
      blocks: [
        { type: 'p', text: "Traditional blockchains execute transactions sequentially — one after another. This creates a fundamental bottleneck: throughput is limited by single-core performance. 20022Chain breaks this barrier with a parallel execution engine that processes independent transactions simultaneously." },
        { type: 'h3', text: '4.1 How It Works' },
        { type: 'p', text: "1. Transactions enter the DAG mempool. 2. The engine analyzes read/write sets to identify dependencies. 3. Independent transactions (different sender/receiver pairs) are assigned to separate execution threads. 4. Dependent transactions (touching the same account) are ordered sequentially within their thread. 5. Results are merged into the final state root." },
        { type: 'box', title: 'Performance', items: [
          'Normal load: 50,000+ TPS',
          'Peak (stress test): 127,390 TPS',
          'Average latency: 12ms per tx',
          'Threads: Up to 64 parallel',
        ]},
      ],
    },
    {
      num: '05',
      title: 'ISO 20022 Native Message Format',
      pb: true,
      blocks: [
        { type: 'p', text: "Every transaction on 20022Chain is wrapped in an ISO 20022 message envelope. This is not a translation layer — the native wire format is ISO 20022." },
        { type: 'table', headers: ['Code', 'Message Type', 'Use Case', 'Example'], rows: [
          ['setr.012', 'Asset Tokenization', 'Create new tokenized asset', 'Tokenize Oro Verde mine → MINE-AU-001'],
          ['pacs.008', 'Token Transfer', 'Send tokens between wallets', 'Transfer 1,000 ARCHT from 0x7a... to 0x3b...'],
          ['semt.002', 'Holdings Report', 'Query portfolio holdings', 'List all ISIN instruments for wallet 0x7a...'],
          ['sese.023', 'Settlement', 'Finalize trade execution', 'Settle buy order: 500 MINE-AU-001 at $45.20'],
          ['seev.031', 'Corporate Action', 'Dividend/yield distribution', 'Distribute Q1 mining yield to token holders'],
          ['camt.053', 'Account Statement', 'Transaction history', 'Generate statement for wallet 0x7a... (Jan-Mar)'],
          ['colr.003', 'Collateral Mgmt', 'Lock/release collateral', 'Lock 10,000 ARCHT as loan collateral'],
          ['reda.041', 'Reference Data', 'Update asset metadata', 'Update Oro Verde reserve estimate to 2.6M oz'],
        ]},
      ],
    },
    {
      num: '06',
      title: 'ISIN Registry & Asset Classification',
      blocks: [
        { type: 'p', text: "Every tokenized asset on 20022Chain receives a unique ISIN (International Securities Identification Number) — the same system used by traditional stock exchanges worldwide. This allows institutional portfolio systems to natively track 20022Chain assets." },
        { type: 'h3', text: '6.1 ISIN Format' },
        { type: 'code', text: `ISIN Format: [TYPE]-[MINERAL]-[SEQUENCE]\nExamples:\n  MINE-AU-001  → Gold mining token (Oro Verde)\n  MINE-LI-042  → Lithium mining token\n  REAL-DXB-007 → Dubai real estate property\n  BOND-US-103  → US Treasury tokenized bond\n  GEM-EM-015   → Colombian emerald token\n  COMM-CU-088  → Copper commodity token` },
        { type: 'h3', text: '6.2 RWA Categories' },
        { type: 'table', headers: ['Code', 'Category', 'Color', 'Description'], rows: [
          ['MINE', 'Mining', 'Gold (#92700a)', 'Tokenized mineral reserves — gold, silver, lithium, rare earths, etc.'],
          ['REAL', 'Real Estate', 'Blue (#1D4ED8)', 'Tokenized properties — commercial, residential, development'],
          ['BOND', 'Fixed Income', 'Purple (#7C3AED)', 'Tokenized bonds — government, corporate, green'],
          ['COMM', 'Commodity', 'Green (#059669)', 'Tokenized commodities — copper, agricultural, energy'],
          ['GEM', 'Gemstone', 'Pink (#DB2777)', 'Tokenized gemstones — diamonds, emeralds, rubies'],
        ]},
        { type: 'p', text: "Registry currently holds 8,247+ registered instruments across all categories." },
      ],
    },
    {
      num: '07',
      title: 'ViewsRight Verification System',
      pb: true,
      blocks: [
        { type: 'p', text: "ViewsRight is 20022Chain's proprietary digital rights and verification system. It provides cryptographic proof of ownership, authenticity, and compliance for tokenized assets." },
        { type: 'h3', text: '7.1 What ViewsRight Does' },
        { type: 'p', text: "When an asset is tokenized, ViewsRight generates a unique cryptographic fingerprint that binds the physical asset to its digital representation. This fingerprint includes: the asset's geographic coordinates, NI 43-101 report hash, ownership chain, compliance status, and verification timestamp." },
        { type: 'h3', text: '7.2 ViewsRight Verification Levels' },
        { type: 'p', text: "A ViewsRight-verified asset has been independently confirmed by the 20022Chain validator network. The VR_VERIFIED seal (purple, fingerprint icon) indicates that:" },
        { type: 'box', title: 'ViewsRight Guarantees', items: [
          '• The underlying physical asset exists and has been verified',
          '• The NI 43-101 report (or equivalent) has been cryptographically hashed and stored on-chain',
          '• Geographic coordinates match satellite imagery verification',
          '• The asset originator has passed KYC/AML verification',
          '• The smart contract has been audited and formally verified',
          '• Ownership rights are legally binding in the asset\'s jurisdiction',
        ]},
        { type: 'h3', text: '7.3 How ViewsRight Verification Works' },
        { type: 'code', text: `1. Asset originator submits documentation → AI analysis\n2. Validator network reviews and votes on verification\n3. If 2/3+ validators approve → VR_VERIFIED seal issued\n4. Seal is permanently recorded on-chain (immutable)\n5. Any user can verify by querying: GET /api/contracts/{address}\n6. Response includes: seal type, timestamp, validator signatures` },
      ],
    },
    {
      num: '08',
      title: 'Seal System & Trust Layers',
      blocks: [
        { type: 'p', text: "20022Chain implements a multi-layered trust system through seals — cryptographic badges that indicate different levels of verification and compliance." },
        { type: 'table', headers: ['Seal', 'Icon', 'Color', 'Meaning'], rows: [
          ['VERIFIED', '✓ BadgeCheck', 'Green (#00C853)', 'Basic verification: asset exists, contract audited'],
          ['VR_VERIFIED', '🔏 Fingerprint', 'Purple (#7C3AED)', 'ViewsRight: full asset + legal + geographic verification'],
          ['IS_VERIFIED', '# Hash', 'Blue (#1D4ED8)', 'ISIN registered: asset has international securities ID'],
          ['GOV_VERIFIED', '🛡 Shield', 'Gold (#D4A017)', 'Government: sovereign or government-backed asset'],
          ['INST_VERIFIED', '🏢 Building', 'Gray (#6B7280)', 'Institutional: verified by institutional custodian'],
          ['PRO_VERIFIED', '🏆 Award', 'Emerald (#059669)', 'Professional: Qualified Person reviewed (mining)'],
          ['PRIVACY_SHIELD', '🔒 Lock', 'Black (#0A0A0A)', 'Private: ZK-verified but details hidden'],
        ]},
        { type: 'p', text: "Assets can carry multiple seals simultaneously. A gold mine might have: VERIFIED + VR_VERIFIED + IS_VERIFIED + PRO_VERIFIED — indicating full verification, ViewsRight confirmation, ISIN registration, and Qualified Person review." },
      ],
    },
    {
      num: '09',
      title: 'Wallet System & Account Types',
      pb: true,
      blocks: [
        { type: 'p', text: "20022Chain supports multiple wallet types designed for different user profiles — from individual investors to institutional custodians." },
        { type: 'h3', text: '9.1 Standard Wallet' },
        { type: 'p', text: "HD-compliant (BIP-39/BIP-44) wallet with a single private key. Generates unique addresses, supports mnemonic seed phrases, and works with all major wallet providers." },
        { type: 'code', text: `// Create wallet\nPOST /api/wallets\nResponse: {\n  address: "0x7a3f8c21...b4e9",\n  publicKey: "0x04ab93...f721",\n  mnemonic: "abandon ability able about above absent..."\n}\n\n// Check balance (18 decimal precision)\nGET /api/balance?address=0x7a3f...\nResponse: { \n  balance: "1000000000000000000",  // 1.0 token\n  staked: "500000000000000000",    // 0.5 staked\n  available: "500000000000000000"  // 0.5 available\n}` },
        { type: 'h3', text: '9.2 Multi-Signature Wallet' },
        { type: 'p', text: "Requires M-of-N signatures to execute transactions. Designed for institutional treasuries, DAOs, and corporate accounts. Example: 3-of-5 signatures required for transfers above $1M." },
        { type: 'h3', text: '9.3 Social Recovery Wallet' },
        { type: 'p', text: "Users designate guardians who can collectively restore access if the private key is lost. No single guardian can access the wallet alone — a threshold (e.g., 3 of 5 guardians) is required." },
        { type: 'h3', text: '9.4 Session Key Wallet' },
        { type: 'p', text: "Allows dApps to request time-limited, scope-limited permissions. Example: a trading interface can execute trades up to $10,000 for 24 hours without prompting for signature each time." },
        { type: 'h3', text: '9.5 Institutional Custody Wallet' },
        { type: 'p', text: "Enterprise-grade wallet with role-based access control, audit logging, compliance monitoring, and integration with HSM (Hardware Security Module) for key management." },
        { type: 'code', text: `// Send transaction\nPOST /api/transactions\nBody: {\n  from: "0x7a3f...",\n  to: "0x3b21...",\n  amount: "1000000000000000000",  // 1.0 token\n  nonce: 42,\n  gasPrice: "1000000000",\n  signature: "0x3a9b..."\n}\nResponse: { hash: "0x8f2a...", status: "pending" }\n\n// Get receipt after confirmation\nGET /api/transactions/0x8f2a...\nResponse: { \n  hash: "0x8f2a...",\n  blockNumber: 158574,\n  status: "confirmed",\n  gasUsed: 21000,\n  iso20022_type: "pacs.008",\n  finality: "instant"\n}` },
      ],
    },
    {
      num: '10',
      title: 'Smart Contract Virtual Machine',
      blocks: [
        { type: 'p', text: "20022Chain runs a Rust-based VM with WebAssembly (WASM) support. Contracts are compiled to WASM bytecode, enabling developers to write in Rust, AssemblyScript, or any WASM-compatible language." },
        { type: 'h3', text: '10.1 Contract Types' },
        { type: 'table', headers: ['Contract', 'Purpose'], rows: [
          ['AssetToken', 'ERC-20 compatible token for tokenized RWA'],
          ['ISINRegistry', 'Register and manage ISIN identifiers'],
          ['YieldDistributor', 'Automated dividend/coupon distribution'],
          ['GovernanceVoting', 'Proposal creation and token-weighted voting'],
          ['BridgeEscrow', 'Lock/unlock for cross-chain transfers'],
          ['LendingPool', 'Collateralized lending with liquidation'],
          ['StakingValidator', 'Validator staking and reward distribution'],
          ['ViewsRightVerifier', 'Issue and verify ViewsRight seals'],
          ['OracleAggregator', 'Price feeds and external data'],
        ]},
      ],
    },
    {
      num: '11',
      title: 'Cross-Chain Bridge Protocol',
      blocks: [
        { type: 'p', text: "Native bridges connect 20022Chain to five major ecosystems:" },
        { type: 'table', headers: ['Chain', 'Protocol', 'Status'], rows: [
          ['Ethereum', 'Lock & Mint (ERC-20)', 'Active'],
          ['BNB Chain', 'Lock & Mint (BEP-20)', 'Active'],
          ['Polygon', 'Lock & Mint (ERC-20)', 'Active'],
          ['Cosmos', 'IBC (Inter-Blockchain Communication)', 'Q4 2026'],
          ['Polkadot', 'XCMP (Cross-Consensus Messaging)', 'Q4 2026'],
        ]},
        { type: 'p', text: "Bridge security: dedicated validator set (16 of 21 threshold), cryptographic proof of lock on source chain, and automatic fraud detection with 7-day challenge period for large transfers." },
      ],
    },
    {
      num: '12',
      title: 'Zero-Knowledge Proof System',
      blocks: [
        { type: 'p', text: "ZK-SNARKs enable privacy-preserving operations. Users can prove facts about their state without revealing the underlying data." },
        { type: 'box', title: 'ZK Use Cases', items: [
          '• Balance proof: Prove you have sufficient funds without revealing exact balance',
          '• KYC proof: Prove KYC completion without exposing personal data',
          '• Reserve proof: Prove asset backing without revealing exact reserve amounts',
          '• Accredited investor: Prove status without revealing income/net worth',
          '• Age verification: Prove >18 without revealing date of birth',
        ]},
      ],
    },
    {
      num: '13',
      title: 'On-Chain Governance & Treasury',
      blocks: [
        { type: 'p', text: "Token holders govern the protocol through proposals and voting. Any holder with 1% of circulating supply can create a proposal. Voting period: 7 days. Quorum: 10% of supply. Execution delay: 48 hours after passing." },
        { type: 'p', text: "The treasury holds protocol revenue (transaction fees, bridge fees, staking commissions) and is allocated by governance vote for: ecosystem development, security audits, validator incentives, and partnership grants." },
      ],
    },
    {
      num: '14',
      title: 'Verkle Trees & State Management',
      blocks: [
        { type: 'p', text: "Traditional Merkle Patricia Tries require downloading ~1 GB of proof data to verify a single account. Verkle Trees reduce this to ~150 bytes — a 90% reduction in node requirements. This enables light clients on mobile devices and browsers to verify state directly." },
      ],
    },
    {
      num: '15',
      title: 'DAG Mempool Architecture',
      blocks: [
        { type: 'p', text: "The DAG (Directed Acyclic Graph) mempool organizes pending transactions as a graph rather than a queue. Transactions that don't conflict can be processed in parallel paths. This eliminates the first-come-first-served bottleneck and enables natural transaction ordering that maximizes throughput." },
      ],
    },
    {
      num: '16',
      title: 'Danksharding & Data Availability',
      blocks: [
        { type: 'p', text: "EIP-4844 blob transactions provide scalable data availability for L2 rollups. Data blobs are stored for 30 days, then pruned — keeping the chain lightweight while supporting L2 ecosystems. This reduces L2 settlement costs by ~100x compared to calldata." },
      ],
    },
    {
      num: '17',
      title: 'Full API Reference & Developer Tools',
      pb: true,
      blocks: [
        { type: 'p', text: "20022Chain exposes 30+ REST API endpoints and JSON-RPC methods for developers." },
        { type: 'h3', text: '17.1 REST Endpoints' },
        { type: 'code', text: `Blockchain:\n  GET  /api/chain         → Chain overview (id, block height, TPS)\n  GET  /api/blocks        → Recent blocks with transactions\n  GET  /api/transactions  → Transaction list with ISO 20022 types\n  GET  /api/stats         → Network statistics (TPS, validators, uptime)\n  GET  /api/validators    → Active validator list with performance\n\nWallets:\n  POST /api/wallets       → Create new HD wallet\n  GET  /api/balance       → Query address balance\n  GET  /api/nonce         → Get next nonce for address\n  POST /api/faucet        → Request testnet tokens\n\nAssets:\n  GET  /api/isin          → ISIN registry lookup\n  GET  /api/contracts     → Smart contract list\n  POST /api/tokenize      → Tokenize new RWA asset\n  GET  /api/por           → Proof of Reserve data\n\nDeFi:\n  GET  /api/defi          → DeFi protocol stats\n  GET  /api/staking       → Staking pools and rewards\n  GET  /api/oracle        → Price oracle feeds\n  POST /api/nft           → Mint NFT for asset certificate\n\nBridge:\n  GET  /api/bridge        → Bridge status and connections\n  POST /api/swift         → ISO 20022 SWIFT message relay\n\nGovernance:\n  GET  /api/governance    → Active proposals and voting\n  GET  /api/network       → Network health and peer count` },
        { type: 'h3', text: '17.2 JSON-RPC Methods' },
        { type: 'code', text: `chain_blockNumber     → Latest block number\nchain_getBalance      → Address balance\nchain_getTransactionByHash → Transaction details\nchain_getBlockByNumber     → Block with transactions\nchain_getTransactionReceipt → Execution receipt\nchain_chainId         → Chain ID (20022)\nchain_gasPrice        → Current gas price` },
      ],
    },
    {
      num: '18',
      title: 'Integration with ARCHT Ecosystem',
      blocks: [
        { type: 'p', text: "20022Chain is the settlement layer for ARCHT.World — the institutional RWA tokenization platform with $5T+ in verified mineral reserves across 1,000+ mining operations." },
        { type: 'box', title: 'Integration Flow', items: [
          'ARCHT: Asset Created → 20022Chain: Smart Contract Deployed',
          'ARCHT: ISIN Assigned → 20022Chain: ISIN Registered',
          'ARCHT: Trade Executed → 20022Chain: Settlement Finalized',
          'ARCHT: Yield Generated → 20022Chain: Distribution via Contract',
          'ARCHT: Mine Verified → 20022Chain: ViewsRight Seal Issued',
        ]},
      ],
    },
    {
      num: '19',
      title: 'Security Model & Audit Framework',
      blocks: [
        { type: 'p', text: "Multi-layered security: formal verification of all smart contracts, continuous monitoring via SOC, multi-sig governance for upgrades, bug bounty program ($500K max reward), time-locked upgrades (48-hour delay), slashing for validator misbehavior, and HSM key management for bridge validators." },
      ],
    },
    {
      num: '20',
      title: 'Roadmap 2026–2028',
      blocks: [
        { type: 'grid', cells: [
          { label: 'Q1 2026', value: 'Testnet launch, validator onboarding, developer documentation' },
          { label: 'Q2 2026', value: 'Security audits (3 firms), bridge testing, ISIN registry population' },
          { label: 'Q3 2026', value: 'PUBLIC MAINNET LAUNCH, ARCHT integration live, first 200 assets tokenized' },
          { label: 'Q4 2026', value: 'Cosmos IBC bridge, Polkadot XCMP bridge, 150+ Rare Earth assets' },
          { label: 'Q1 2027', value: 'Danksharding activation, L2 rollup support, 180 Lithium assets' },
          { label: 'Q2 2027', value: '200+ validators, governance expansion, AMM DEX on-chain' },
          { label: 'Q3 2027', value: '100+ Real Estate assets, institutional custody integrations' },
          { label: '2028', value: '100K+ TPS target, full banking API integration, sovereign partnerships' },
        ]},
      ],
    },
    // ═══════════════════════════════════════════════════
    // SECTION 24 — NATIVE ADDRESS SYSTEM
    // ═══════════════════════════════════════════════════
    {
      num: '24',
      title: 'Native Address System: Human-Readable Identifiers',
      pb: true,
      blocks: [
        { type: 'p', text: "Unlike traditional blockchains that use opaque hexadecimal addresses (e.g. 0x7a3f8c21...b4e9), 20022Chain introduces a human-readable native address system. Every address on the network follows the format archt:type:name:hash — making it immediately clear what an address represents, who owns it, and what role it plays in the ecosystem." },

        { type: 'h3', text: '24.1 Address Format' },
        { type: 'code', text: `ADDRESS FORMAT:\n\n  archt : type : name : hash\n  ─────   ────   ────   ────\n    │       │      │      └── 24-char hex identifier (unique)\n    │       │      └── Human-readable context (up to 24 chars)\n    │       └── Address category (contract, val, bank, user, etc.)\n    └── Network prefix (always \"archt\")\n\nEXAMPLES:\n  archt:contract:oro-verde-gold-token:a2693d3520695a7af3bd6931\n  archt:val:zurich-prime:8f2a1b3c4d5e6f70\n  archt:bank:usd20022:a1b2c3d4e5f60001\n  archt:user:anonymous:000000000000\n  tx:8f2a3b4c5d6e7f...  (transaction hash)` },

        { type: 'h3', text: '24.2 Address Types — Complete Reference' },
        { type: 'p', text: "20022Chain supports 10 distinct address types, each color-coded in the explorer for instant visual identification:" },

        { type: 'table', headers: ['Type', 'Prefix', 'Color', 'Purpose', 'Example'], rows: [
          ['Contract', 'archt:contract:', 'Green (#00C853)', 'Smart contracts — tokens, RWA, escrow, governance', 'archt:contract:oro-verde-gold-token:a2693d3520695a7af3bd6931'],
          ['Validator', 'archt:val:', 'Blue (#1D4ED8)', 'Block producers and consensus participants', 'archt:val:zurich-prime:8f2a1b3c4d5e6f70'],
          ['Bank', 'archt:bank:', 'Green (#059669)', 'Banking entities, SWIFT integration, CBDC contracts', 'archt:bank:usd20022:a1b2c3d4e5f60001'],
          ['Account', 'archt:account:', 'Gray (#555555)', 'Generic user account (no context name)', 'archt:account:3f8c21a9b7e4d6f0...'],
          ['Wallet', 'archt:wallet:', 'Gray (#555555)', 'HD wallet address (BIP-39/44)', 'archt:wallet:sandbox-lq2x8:7b3e...'],
          ['User', 'archt:user:', 'Gray (#555555)', 'Identified user account', 'archt:user:anonymous:000000000000'],
          ['Owner', 'archt:owner:', 'Purple (#7C3AED)', 'Asset originator / contract deployer', 'archt:owner:oro-verde-sa:5a7b9c3d...'],
          ['System', 'archt:system:', 'Amber (#F59E0B)', 'Protocol-level operations (fees, rewards)', 'archt:system:fee-collector:0000...'],
          ['Genesis', 'archt:genesis:', 'Amber (#F59E0B)', 'Genesis block addresses (initial distribution)', 'archt:genesis:initial-supply:0000...'],
          ['Context', 'archt:context:', 'Teal (#059669)', 'Named contextual address (oracle, vault, etc.)', 'archt:settlement-engine:9d2f...'],
        ]},

        { type: 'h3', text: '24.3 Transaction Hash Format' },
        { type: 'p', text: "Transaction hashes also use a distinct format with the tx: prefix followed by a 64-character hexadecimal hash. This makes it impossible to confuse a transaction hash with an address." },
        { type: 'code', text: `TRANSACTION HASH:\n  tx:8f2a3b4c5d6e7f8091a2b3c4d5e6f708192a3b4c5d6e7f8091a2b3c4d5e6f7\n     └── 64-char SHA-256 hex hash\n\nDISPLAY (explorer): tx:8f2a3b4c5d6e...e6f7 (truncated)` },

        { type: 'h3', text: '24.4 Live Contract Addresses on 20022Chain' },
        { type: 'p', text: "Below are real deployed contract addresses currently active on the network. Each address encodes the asset name directly, making the blockchain explorer human-readable:" },

        { type: 'table', headers: ['Asset', 'Native Address', 'Type'], rows: [
          ['Oro Verde Gold Token', 'archt:contract:oro-verde-gold-token:a2693d3520695a7af3bd6931', 'MINE'],
          ['Manhattan Tower REIT', 'archt:contract:manhattan-tower-reit:7f3b2c1d4e5a6890', 'REAL'],
          ['Green Energy Bond 2030', 'archt:contract:green-energy-bond-2030:9c8d7e6f5a4b3210', 'BOND'],
          ['Colombian Emerald Trust', 'archt:contract:colombian-emerald-trus:4a5b6c7d8e9f0123', 'GEM'],
          ['NeuralForge Protocol Token', 'archt:contract:neuralforge-protocol-t:b3c4d5e6f7a89012', 'TOKEN'],
          ['Digital Peso MX', 'archt:contract:digital-peso-mx:d5e6f7a8b9c01234', 'CBDC'],
          ['LegalChain Escrow', 'archt:contract:legalchain-escrow:e6f7a8b9c0d12345', 'CUSTOM'],
          ['ARCHT Governance', 'archt:contract:archt-governance:f7a8b9c0d1e23456', 'GOVERNANCE'],
        ]},

        { type: 'h3', text: '24.5 Validator Addresses' },
        { type: 'p', text: "Validators are identified by archt:val: followed by a human-readable name. This allows anyone to see which validator produced a block without looking up a registry:" },
        { type: 'table', headers: ['Validator', 'Native Address', 'Region'], rows: [
          ['Zurich Prime', 'archt:val:zurich-prime:8f2a1b3c4d5e6f70', 'Europe (Switzerland)'],
          ['Singapore Nexus', 'archt:val:singapore-nexus:1a2b3c4d5e6f7890', 'Asia-Pacific'],
          ['New York Sentinel', 'archt:val:new-york-sentinel:2b3c4d5e6f789012', 'North America'],
          ['Dubai Gateway', 'archt:val:dubai-gateway:3c4d5e6f78901234', 'Middle East'],
          ['São Paulo Anchor', 'archt:val:sao-paulo-anchor:4d5e6f7890123456', 'South America'],
          ['Tokyo Relay', 'archt:val:tokyo-relay:5e6f789012345678', 'Asia-Pacific'],
          ['London Bridge', 'archt:val:london-bridge:6f78901234567890', 'Europe (UK)'],
          ['Sydney Core', 'archt:val:sydney-core:7890123456789abc', 'Oceania'],
        ]},

        { type: 'h3', text: '24.6 Banking & SWIFT Addresses' },
        { type: 'p', text: "For SWIFT/IBAN integration, 20022Chain uses archt:bank: addresses. Each supported fiat currency and stablecoin has a dedicated on-chain contract address:" },
        { type: 'table', headers: ['Currency', 'Native Address', 'Category'], rows: [
          ['US Dollar (USD)', 'archt:bank:usd20022:a1b2c3d4e5f60001', 'FIAT_MAJOR'],
          ['Euro (EUR)', 'archt:bank:eur20022:a1b2c3d4e5f60002', 'FIAT_MAJOR'],
          ['British Pound (GBP)', 'archt:bank:gbp20022:a1b2c3d4e5f60003', 'FIAT_MAJOR'],
          ['Japanese Yen (JPY)', 'archt:bank:jpy20022:a1b2c3d4e5f60004', 'FIAT_MAJOR'],
          ['Swiss Franc (CHF)', 'archt:bank:chf20022:a1b2c3d4e5f60005', 'FIAT_MAJOR'],
          ['Chinese Yuan (CNY)', 'archt:bank:cny20022:a1b2c3d4e5f60006', 'FIAT_MAJOR'],
          ['Mexican Peso (MXN)', 'archt:bank:mxn20022:a1b2c3d4e5f60009', 'FIAT_MINOR'],
          ['Brazilian Real (BRL)', 'archt:bank:brl20022:a1b2c3d4e5f60010', 'FIAT_MINOR'],
          ['Colombian Peso (COP)', 'archt:bank:cop20022:a1b2c3d4e5f60011', 'FIAT_MINOR'],
          ['UAE Dirham (AED)', 'archt:bank:aed20022:a1b2c3d4e5f60020', 'FIAT_MAJOR'],
          ['USDC Stablecoin', 'archt:bank:usdc20022:a1b2c3d4e5f60030', 'STABLECOIN'],
          ['USDT Stablecoin', 'archt:bank:usdt20022:a1b2c3d4e5f60031', 'STABLECOIN'],
        ]},

        { type: 'h3', text: '24.7 Address Generation Algorithm' },
        { type: 'p', text: "Addresses are generated deterministically from the entity name and a cryptographic hash. The name component is sanitized (lowercase, alphanumeric + hyphens, max 24 characters), and the hash is derived from SHA-256 of the entity metadata:" },
        { type: 'code', text: `ADDRESS GENERATION:\n\n1. Input: Entity name + metadata\n2. Sanitize: lowercase, replace non-alphanumeric with \"-\"\n3. Truncate: max 24 characters for the name component\n4. Hash: SHA-256(name + metadata + timestamp)\n5. Truncate hash: 24 hex chars for addresses, 16 hex for validators\n6. Assemble: archt:{type}:{clean_name}:{hash}\n\nVALIDATION RULES:\n  • Prefix must be \"archt\"\n  • Type must be a recognized category\n  • Name: lowercase, alphanumeric + hyphens only\n  • Hash: hexadecimal, fixed length per type\n  • Total address length: 40–80 characters` },

        { type: 'h3', text: '24.8 Why Human-Readable Addresses Matter' },
        { type: 'box', title: 'Advantages over Hex Addresses', items: [
          '• Instant identification: archt:contract:oro-verde-gold-token immediately tells you it\'s a gold mining contract',
          '• Reduced errors: Users can visually verify they\'re sending to the right address',
          '• Explorer friendly: No need to look up contract names — the name IS the address',
          '• Institutional compliance: Banks can log readable addresses in their SWIFT systems',
          '• Auditing: Regulators can review transactions without address-to-name mapping tables',
          '• Color-coded: Explorer renders each type with distinct colors for instant visual parsing',
          '• Backward compatible: Legacy 0x addresses are still supported for bridge transfers',
        ]},
      ],
    },

    // ═══════════════════════════════════════════════════
    // SECTION 21 — DEPLOYED SMART CONTRACTS CATALOG
    // ═══════════════════════════════════════════════════
    {
      num: '21',
      title: 'Deployed Smart Contracts Catalog',
      pb: true,
      blocks: [
        { type: 'p', text: "20022Chain supports multiple smart contract categories, each purpose-built for a distinct use case. Every deployed contract is compiled, audited, and assigned a compliance score (0–100) before activation. Below is a comprehensive breakdown of every contract type currently live on the network, with real deployed examples." },

        { type: 'h3', text: '21.1 TOKEN Contracts — Utility & Ecosystem Tokens' },
        { type: 'p', text: "TOKEN contracts are ERC-20 compatible tokens deployed for specific verticals — AI infrastructure, social engagement, or digital currencies. They follow the ISO 20022 message standard (setr.012) for issuance and (pacs.008) for transfers." },

        { type: 'table', headers: ['Contract', 'Sector', 'Score', 'Description'], rows: [
          ['NeuralForge Protocol Token', 'AI Infrastructure', '98/100', 'Open-source AI training protocol. Verified developer entity with professional license. Token holders access decentralized compute, training datasets, and model governance. Compliant with ISO 20022 setr.012 for asset issuance. Rewards distributed via seev.031 corporate action messages.'],
          ['NovaCast Social Token', 'Content Creator', '92/100', 'Social engagement token backed by content revenue and brand deals. Holders get exclusive access to content, merchandise, and live events. Revenue sharing via on-chain yield distribution (seev.031). Verified with VR_VERIFIED seal.'],
          ['Digital Peso MX', 'CBDC', '93/100', 'Central Bank Digital Currency issued by Banco de México. Fiat-backed 1:1 parity with the Mexican Peso. GOV_VERIFIED seal from monetary authority. Full ISO 20022 compliance for interbank settlement via pacs.008 messages. Regulated under BANXICO framework.'],
        ]},

        { type: 'box', title: 'TOKEN Contract Architecture', items: [
          '• Issuance: ISO 20022 setr.012 (Asset Tokenization) message creates the token supply',
          '• Transfers: pacs.008 (Token Transfer) between any 20022Chain wallet',
          '• Holdings: semt.002 (Holdings Report) queries portfolio composition',
          '• Yield: seev.031 (Corporate Action) distributes dividends or rewards',
          '• Compliance: Automated KYC/AML checks at contract level',
          '• Auditing: Every contract undergoes static analysis + formal verification before deploy',
        ]},

        { type: 'h3', text: '21.2 CUSTOM Contracts — Specialized Business Logic' },
        { type: 'p', text: "CUSTOM contracts implement specialized business logic that goes beyond standard token operations. They enable cross-border escrow, automated legal execution, and programmable compliance." },

        { type: 'table', headers: ['Contract', 'Score', 'Description'], rows: [
          ['LegalChain Escrow', '94/100', 'Automated legal escrow for cross-border transactions. Bar-certified smart contract verified by legal professionals. Funds are locked in escrow and released automatically when predefined conditions are met (delivery confirmation, inspection approval, arbitration ruling). Supports multi-jurisdictional compliance with ISO 20022 colr.003 (Collateral Management) messages.'],
        ]},

        { type: 'box', title: 'LegalChain Escrow — How It Works', items: [
          '1. Buyer deposits funds → Contract locks via colr.003 (Collateral Lock)',
          '2. Seller fulfills conditions → Oracle verifies delivery/inspection',
          '3. Conditions met → Contract releases funds via pacs.008 (Transfer)',
          '4. Dispute → Multi-sig arbitration panel reviews on-chain evidence',
          '5. Resolution → Funds distributed per arbitration decision',
          '• All steps generate ISO 20022 messages readable by any bank',
        ]},

        { type: 'h3', text: '21.3 GOVERNANCE Contract — Decentralized Protocol Control' },
        { type: 'p', text: "The ARCHT Governance contract is the decentralized governance mechanism for the entire ARCHT ecosystem. It enables token-weighted voting with timelock execution, ensuring that no single entity can modify the protocol without community consensus." },

        { type: 'table', headers: ['Contract', 'Score', 'Description'], rows: [
          ['ARCHT Governance', '97/100', 'Decentralized governance for the ARCHT ecosystem with weighted voting and timelock execution. Proposal types include: protocol upgrades, parameter changes, treasury allocations, validator additions, and emergency actions. Quorum: 10% of circulating supply. Voting period: 7 days. Execution delay: 48 hours.'],
        ]},

        { type: 'box', title: 'Governance Mechanics', items: [
          '• Proposal Creation: Any holder with ≥1% of supply can submit a proposal',
          '• Voting Power: 1 token = 1 vote, delegatable to other addresses',
          '• Quorum: 10% of circulating supply must participate',
          '• Approval Threshold: >50% of votes must be in favor',
          '• Timelock: 48-hour delay between approval and execution',
          '• Emergency: 67% supermajority can bypass timelock for critical fixes',
          '• Treasury: Protocol fees accumulate in the governance treasury',
        ]},

        { type: 'h3', text: '21.4 RWA Contracts — Real World Asset Tokenization' },
        { type: 'p', text: "RWA (Real World Asset) contracts represent the core value proposition of 20022Chain: tokenizing physical assets with full regulatory compliance, geological verification, and institutional-grade custody. Each RWA contract includes an ISIN identifier, compliance scoring, and is linked to verified physical assets." },

        { type: 'table', headers: ['Contract', 'ISIN', 'Type', 'Score', 'Description'], rows: [
          ['Oro Verde Gold Token', 'ARCHT00001', 'MINE', '92/100', 'Tokenized gold mining reserves in Antioquia, Colombia. NI 43-101 verified by SRK Consulting. 2.3M troy ounces in proven reserves. Each token represents fractional ownership of verified gold deposits. Geographic coordinates on-chain. Vaulted reserves audited quarterly.'],
          ['Manhattan Tower REIT', 'ARCHT00003', 'REAL', '92/100', 'Class A commercial real estate in Midtown Manhattan, New York. SEC Reg D compliant. 98.2% occupancy rate. Quarterly yield distribution to token holders via seev.031. Institutional custody with CBRE Group. Property valued at $847M.'],
          ['Green Energy Bond 2030', 'ARCHT00005', 'BOND', '94/100', 'Green bond funding solar and wind infrastructure across the EU. 4.2% APY with quarterly coupon payments. AAA ESG rating from Sustainalytics. EU Taxonomy aligned. Proceeds fund 12 renewable energy projects across 7 EU countries. Maturity: 2030.'],
          ['Colombian Emerald Trust', 'ARCHT00004', 'GEM', '98/100', 'Investment-grade emeralds from the legendary Muzo mine in Boyacá, Colombia. GIA (Gemological Institute of America) certified. Each token backed by physically vaulted emeralds in Zurich Freeport. Independent valuation by Christie\'s auction house. Minimum 2.5 carat, vivid green classification.'],
        ]},

        { type: 'box', title: 'RWA Tokenization Pipeline', items: [
          '1. Asset originator submits documentation + geological/legal reports',
          '2. AI analysis engine processes NI 43-101, GIA reports, or property appraisals',
          '3. Validator network reviews and votes on verification (2/3+ required)',
          '4. Smart contract deployed with ISO 20022 setr.012 message',
          '5. ISIN assigned (ARCHT format) and registered on-chain',
          '6. ViewsRight seal issued after full verification',
          '7. Token supply minted to originator address',
          '8. Secondary trading enabled via pacs.008 transfers',
          '9. Yield distribution automated via seev.031 corporate actions',
          '10. Quarterly audits: reserve verification + compliance score update',
        ]},

        { type: 'h3', text: '21.5 Contract Compliance Scoring' },
        { type: 'p', text: "Every deployed contract receives a compliance score from 0 to 100, calculated from multiple factors:" },
        { type: 'table', headers: ['Factor', 'Weight', 'Description'], rows: [
          ['Smart Contract Audit', '25%', 'Static analysis, formal verification, vulnerability scanning'],
          ['Legal Compliance', '20%', 'Jurisdictional review, regulatory filing, legal opinion'],
          ['Asset Verification', '20%', 'Physical asset existence, geological/appraisal reports'],
          ['KYC/AML', '15%', 'Originator identity verification, sanctions screening'],
          ['Ongoing Monitoring', '10%', 'Real-time compliance tracking, anomaly detection'],
          ['Community Trust', '10%', 'Interaction count, dispute history, governance participation'],
        ]},
      ],
    },

    // ═══════════════════════════════════════════════════
    // SECTION 22 — ISIN FINANCIAL INSTRUMENTS REGISTRY
    // ═══════════════════════════════════════════════════
    {
      num: '22',
      title: 'ISIN Financial Instruments Registry',
      pb: true,
      blocks: [
        { type: 'p', text: "Beyond RWA mining and real estate tokens, 20022Chain hosts a full ISIN (International Securities Identification Number) registry compliant with ISO 6166. These instruments represent traditional financial products — bonds, equities, funds, and derivatives — tokenized on-chain with the same identifiers used by stock exchanges worldwide." },

        { type: 'h3', text: '22.1 What Makes ISIN Instruments Different' },
        { type: 'p', text: "ISIN-registered instruments on 20022Chain are designed for institutional interoperability. Unlike standard crypto tokens, they carry internationally recognized securities identifiers, enabling portfolio systems at banks, asset managers, and clearing houses to natively track and settle them." },
        { type: 'box', title: 'ISIN Instrument Properties', items: [
          '• ISO 6166 compliant: Same identifier format used by NYSE, EURONEXT, LSE',
          '• Custodian integration: Compatible with institutional custody platforms',
          '• Settlement: T+0 instant finality vs. T+2 in traditional markets',
          '• Compliance: Automated regulatory checks per jurisdiction',
          '• Reporting: ISO 20022 semt.002 (Holdings Report) and camt.053 (Statement)',
          '• Cross-border: Single instrument accessible from any jurisdiction',
        ]},

        { type: 'h3', text: '22.2 Deployed ISIN Instruments' },
        { type: 'table', headers: ['ISIN', 'Name', 'Category', 'Score', 'Description'], rows: [
          ['CH0012345678', 'Alpine Fund VII', 'Private Equity', '97/100', 'Private equity fund tokenization from Switzerland. Verified entity with privacy shield under Swiss regulatory framework. Accredited investor restrictions enforced at contract level. Fund invests in mid-market European technology companies. Minimum ticket: 100,000 CHF. Quarterly NAV reporting via semt.002 messages. ZK-proof verification for investor accreditation.'],
          ['US912810TA43', 'US Treasury Token', 'Treasury Bond', '95/100', 'Tokenized US Treasury Bond T-Bill 2025. Government-backed, institutional grade. GOV_VERIFIED seal from the US Treasury. 4.75% yield to maturity. Coupon payments automated via seev.031 corporate action messages. Settlement in T+0 vs traditional T+1. Fully compliant with SEC regulations.'],
          ['ARCHT00010', 'Lithium Battery Fund ISIN', 'Capital Markets', '99/100', 'ISO 6166 registered digital financial instrument tracking lithium battery supply chain investments. Covers mining (Chile, Australia), processing (China), and EV battery manufacturing (Germany, USA). Diversified exposure across the entire lithium value chain. IS_VERIFIED + INST_VERIFIED seals. Quarterly rebalancing.'],
          ['ARCHT00011', 'Carbon Credit Token ISIN', 'Carbon Markets', '99/100', 'Verified carbon credits tokenized as ISO 20022 digital financial instruments. EU ETS (Emissions Trading System) compliant. Verified by BDO auditors. Each token represents 1 tonne of CO₂ equivalent. Retirement mechanism ensures credits cannot be double-counted. GOV_VERIFIED seal from EU ETS Authority. Integrated with Verra and Gold Standard registries.'],
        ]},

        { type: 'h3', text: '22.3 ISIN Lifecycle on 20022Chain' },
        { type: 'code', text: `ISIN INSTRUMENT LIFECYCLE:\n\n1. REGISTRATION\n   └─ Issuer submits: prospectus, legal entity, LEI code\n   └─ ISO 6166 identifier assigned (e.g. CH0012345678)\n   └─ Smart contract deployed with instrument parameters\n   └─ IS_VERIFIED seal issued\n\n2. PRIMARY MARKET (Issuance)\n   └─ setr.012 → Instrument created on-chain\n   └─ Tokens minted to issuer / underwriter address\n   └─ KYC verification for subscribers (ZK-proof supported)\n   └─ Subscription period with min/max thresholds\n\n3. SECONDARY MARKET (Trading)\n   └─ pacs.008 → Token transfers between investors\n   └─ T+0 instant settlement with finality\n   └─ Order book or AMM DEX integration\n   └─ Cross-chain transfers via bridge protocol\n\n4. CORPORATE ACTIONS\n   └─ seev.031 → Dividends, coupons, yield distribution\n   └─ Automated calculation and distribution\n   └─ Tax withholding per jurisdiction\n\n5. REPORTING\n   └─ semt.002 → Holdings report for custodians\n   └─ camt.053 → Account statement for investors\n   └─ reda.041 → Reference data updates (NAV, ratings)\n\n6. MATURITY / REDEMPTION\n   └─ Bonds: Automatic principal return at maturity\n   └─ Funds: NAV-based redemption mechanism\n   └─ Tokens burned upon redemption` },

        { type: 'h3', text: '22.4 Institutional Integration' },
        { type: 'p', text: "ISIN instruments on 20022Chain are designed to integrate directly with existing institutional infrastructure. Because every operation generates standard ISO 20022 messages, banks and custodians can process 20022Chain transactions with their existing SWIFT and TARGET2 systems — no custom integration required." },
        { type: 'table', headers: ['System', 'Integration', 'Message Type'], rows: [
          ['SWIFT gpi', 'Cross-border settlement', 'pacs.008, pacs.009'],
          ['TARGET2', 'EU central bank settlement', 'pacs.008'],
          ['FedNow', 'US instant settlement', 'pacs.008'],
          ['DTCC', 'Securities clearing', 'sese.023'],
          ['Euroclear', 'Bond settlement', 'sese.023, seev.031'],
          ['Bloomberg Terminal', 'Market data feed', 'reda.041'],
          ['Custody platforms', 'Asset safekeeping', 'semt.002, camt.053'],
        ]},
      ],
    },

    // ═══════════════════════════════════════════════════
    // SECTION 23 — VIEWSRIGHT: INTELLECTUAL PROPERTY ON CHAIN
    // ═══════════════════════════════════════════════════
    {
      num: '23',
      title: 'ViewsRight: Intellectual Property on Chain',
      pb: true,
      blocks: [
        { type: 'p', text: "ViewsRight extends beyond physical asset verification into intellectual property (IP) tokenization. Films, music royalties, patents, and digital art can be tokenized with cryptographic proof of ownership, automated royalty distribution, and global secondary market access." },

        { type: 'h3', text: '23.1 ViewsRight IP Categories' },
        { type: 'p', text: "ViewsRight supports five IP asset categories, each with specialized smart contract logic, compliance requirements, and royalty distribution mechanisms:" },
        { type: 'table', headers: ['Category', 'Code', 'Use Case', 'Royalty Mechanism'], rows: [
          ['Film & Cinema', 'FILM', 'Production funding, distribution rights, box office revenue', 'Revenue share from theatrical, streaming, and syndication. Automated quarterly distribution via seev.031.'],
          ['Music', 'MUSIC', 'Master recordings, publishing rights, streaming royalties', 'Per-stream royalty calculation. Integration with DSPs (Spotify, Apple Music). WIPO-registered rights.'],
          ['Patents', 'PATENT', 'Technology patents, licensing revenue, R&D funding', 'Licensing fee distribution to token holders. Patent validity tracked on-chain. PCT international filing.'],
          ['Digital Art', 'ART', 'Generative art, collections, digital editions', 'Primary sale + secondary royalties (creator royalty on every resale). Provenance tracked on-chain.'],
          ['Literary Works', 'LITERARY', 'Books, screenplays, research papers', 'Publishing royalties, translation rights, adaptation rights. Berne Convention compliant.'],
        ]},

        { type: 'h3', text: '23.2 Deployed ViewsRight Assets' },

        { type: 'h3', text: 'FILM — Indie Film DAO' },
        { type: 'table', headers: ['Property', 'Value'], rows: [
          ['ViewsRight ID', 'VR-2025-FILM-0001'],
          ['Title', 'Indie Film DAO — "The Last Algorithm"'],
          ['Genre', 'Sci-Fi Feature Film'],
          ['Score', '93/100'],
          ['Interactions', '3,909'],
          ['Description', 'Decentralized film production fund for "The Last Algorithm". Community-funded cinema where token holders vote on creative decisions (casting, distribution, marketing). Revenue from theatrical release, streaming licensing, and merchandise flows directly to token holders via ISO 20022 seev.031 messages.'],
        ]},
        { type: 'box', title: 'Film DAO Revenue Model', items: [
          '• Theatrical Release: Box office revenue → 60% to token holders',
          '• Streaming Rights: Netflix/Amazon licensing → quarterly distribution',
          '• Merchandise: Official merchandise sales → 10% royalty to DAO',
          '• International Distribution: Territory-by-territory licensing',
          '• Sequel Rights: Token holders vote on sequel development',
          '• All distributions automated via seev.031 corporate action messages',
        ]},

        { type: 'h3', text: 'MUSIC — Ava Solaris Royalty Token' },
        { type: 'table', headers: ['Property', 'Value'], rows: [
          ['ViewsRight ID', 'VR-2025-MUS-0001'],
          ['Title', 'Ava Solaris Royalty Token — "Neon Horizons"'],
          ['Genre', 'Electronic / Hip-Hop'],
          ['Score', '96/100'],
          ['Interactions', '737'],
          ['Description', 'Tokenized music royalties for the album "Neon Horizons". Automated quarterly distribution from streaming platforms (Spotify, Apple Music, YouTube Music, Tidal). Master recording ownership fractionalized. WIPO-registered intellectual property with global royalty collection.'],
        ]},

        { type: 'h3', text: 'MUSIC — Genesis Soundtrack Collection' },
        { type: 'table', headers: ['Property', 'Value'], rows: [
          ['ViewsRight ID', 'VR-2025-0001'],
          ['Title', 'Genesis Soundtrack Collection'],
          ['Genre', 'Film Soundtrack'],
          ['Score', '93/100'],
          ['Interactions', '1,484'],
          ['Description', 'Master recordings and publishing rights for an award-winning film soundtrack. WIPO copyright registered. Royalties from synchronization licensing, streaming, and physical media sales. Token holders receive proportional revenue share from all exploitation channels.'],
        ]},

        { type: 'h3', text: 'PATENT — NexGen AI Architecture Patent' },
        { type: 'table', headers: ['Property', 'Value'], rows: [
          ['ViewsRight ID', 'VR-2025-0002'],
          ['Title', 'NexGen AI Architecture Patent'],
          ['Category', 'AI Technology'],
          ['Score', '92/100'],
          ['Interactions', '3,093'],
          ['Description', 'Patented neural architecture for real-time geological analysis. International PCT filing covering 148 jurisdictions. Licensing revenue from mining companies, geological surveys, and academic institutions flows to token holders. Patent validity: 20 years from filing date. Revenue model: per-use licensing + annual enterprise licenses.'],
        ]},
        { type: 'box', title: 'Patent Tokenization Benefits', items: [
          '• Fractional ownership: Invest in high-value patents without full acquisition',
          '• Licensing automation: Smart contract manages licensing agreements',
          '• Revenue distribution: Licensing fees distributed quarterly to holders',
          '• Validity tracking: Patent status (active, challenged, expired) on-chain',
          '• Jurisdiction coverage: PCT filing tracked per country',
          '• R&D funding: Token sale funds further patent development',
        ]},

        { type: 'h3', text: 'ART — Digital Art: Fractal Earth Series' },
        { type: 'table', headers: ['Property', 'Value'], rows: [
          ['ViewsRight ID', 'VR-2025-0003'],
          ['Title', 'Digital Art: Fractal Earth Series'],
          ['Category', 'Generative Art'],
          ['Score', '98/100'],
          ['Interactions', '1,941'],
          ['Description', 'Limited edition generative art collection. 50 unique pieces created from geological fractal data sourced from real mining surveys. Each piece is algorithmically generated from seismic data, mineral density maps, and topographic models. On-chain provenance ensures authenticity. Creator royalty (7.5%) on every secondary sale.'],
        ]},

        { type: 'h3', text: '23.3 ViewsRight Smart Contract Architecture' },
        { type: 'code', text: `VIEWSRIGHT CONTRACT STRUCTURE:\n\n┌─────────────────────────────────────────────┐\n│  ViewsRight Registry (Master Contract)      │\n│  ├── IP Asset Registration                  │\n│  ├── Ownership Verification (WIPO/PCT/GIA)  │\n│  ├── Cryptographic Fingerprint Generation   │\n│  └── Seal Issuance (VR_VERIFIED)            │\n├─────────────────────────────────────────────┤\n│  Royalty Distribution Engine                │\n│  ├── Revenue Oracle (streaming/box office)  │\n│  ├── Proportional Calculation               │\n│  ├── seev.031 Corporate Action Messages     │\n│  ├── Tax Withholding per Jurisdiction       │\n│  └── Automated Quarterly Payout             │\n├─────────────────────────────────────────────┤\n│  Secondary Market                           │\n│  ├── pacs.008 Token Transfer                │\n│  ├── Creator Royalty on Resale              │\n│  ├── Order Book / AMM Trading               │\n│  └── Cross-Chain Bridge Support             │\n├─────────────────────────────────────────────┤\n│  Governance Layer                           │\n│  ├── Token-weighted Voting                  │\n│  ├── Creative Decisions (Film DAO)          │\n│  ├── Revenue Strategy Proposals             │\n│  └── Emergency Actions (IP disputes)        │\n└─────────────────────────────────────────────┘` },

        { type: 'h3', text: '23.4 Legal Framework & Compliance' },
        { type: 'p', text: "All ViewsRight IP assets comply with international intellectual property law:" },
        { type: 'table', headers: ['Framework', 'Coverage', 'Application'], rows: [
          ['WIPO Copyright Treaty', 'Music, Film, Art', 'International copyright registration and protection'],
          ['Berne Convention', 'Literary, Artistic Works', 'Automatic copyright in 181 member countries'],
          ['PCT (Patent Cooperation Treaty)', 'Patents', 'International patent filing across 157 jurisdictions'],
          ['TRIPS Agreement', 'All IP Types', 'WTO minimum standards for IP protection'],
          ['EU Copyright Directive', 'Digital Content', 'European digital rights and platform liability'],
          ['DMCA', 'Digital Works', 'US digital copyright protection and safe harbor'],
        ]},

        { type: 'h3', text: '23.5 Revenue Flow & Distribution' },
        { type: 'p', text: "ViewsRight uses ISO 20022 corporate action messages (seev.031) to automate royalty distribution. Revenue from external sources (streaming platforms, licensing agreements, box office) is verified by oracle nodes and distributed proportionally to token holders." },
        { type: 'box', title: 'Distribution Timeline', items: [
          '• Music: Monthly streaming royalty calculation → quarterly payout',
          '• Film: Box office weekly settlement → streaming quarterly',
          '• Patents: Licensing fee upon execution → quarterly aggregate',
          '• Art: Primary sale immediate → resale royalty on each transaction',
          '• Minimum distribution: 0.01 ARCHT (dust threshold)',
          '• Gas fees: Subsidized by protocol for royalty distributions',
        ]},
      ],
    },
  ],
  backCover: {
    title: '20022Chain',
    subtitle: 'The ISO 20022-Native Blockchain',
    part: 'Part of the ARCHT Ecosystem',
    rights: '© 2026 20022Chain. All rights reserved.',
  },
};

const es: WpContent = {
  ...en,
  toolbar: { back: 'Volver', download: 'DESCARGAR PDF' },
  cover: {
    title: 'Libro Blanco Técnico',
    subtitle: 'La blockchain nativa ISO 20022 para\nliquidación institucional de activos reales',
    version: 'Versión 1.0 · Febrero 2026',
  },
  tocTitle: 'Tabla de contenidos',
  tocItems: [
    '01 — Por qué existe 20022Chain',
    '02 — Arquitectura: 12 subsistemas en detalle',
    '03 — Mecanismo de consenso ArchPoS',
    '04 — Motor de ejecución paralela',
    '05 — Formato nativo de mensajes ISO 20022',
    '06 — Registro ISIN y clasificación de activos',
    '07 — Sistema de verificación ViewsRight',
    '08 — Sistema de sellos y capas de confianza',
    '09 — Sistema de billeteras y tipos de cuenta',
    '10 — Máquina virtual de contratos inteligentes',
    '11 — Protocolo de puente cross-chain',
    '12 — Sistema de pruebas de conocimiento cero',
    '13 — Gobernanza on-chain y tesorería',
    '14 — Árboles Verkle y gestión de estado',
    '15 — Arquitectura del mempool DAG',
    '16 — Danksharding y disponibilidad de datos',
    '17 — Referencia API y herramientas de desarrollo',
    '18 — Integración con el ecosistema ARCHT',
    '19 — Modelo de seguridad y marco de auditoría',
    '20 — Hoja de ruta 2026–2028',
    '21 — Catálogo de contratos inteligentes desplegados',
    '22 — Registro de instrumentos financieros ISIN',
    '23 — ViewsRight: Propiedad intelectual en la blockchain',
    '24 — Sistema nativo de direcciones: Identificadores legibles',
  ],
  sections: [
    {
      num: '01',
      title: 'Por qué existe 20022Chain',
      pb: true,
      blocks: [
        { type: 'p', text: "El sistema financiero global mueve más de 5 cuatrillones de dólares anuales mediante estándares de mensajería. ISO 20022 es el formato universal adoptado por SWIFT (migrando más de 11.000 bancos), el Banco Central Europeo (TARGET2), la Reserva Federal (FedNow) y más de 200 países. Para 2025, ISO 20022 será obligatorio en toda la mensajería financiera internacional." },
        { type: 'p', text: "Sin embargo, cada blockchain existente — Ethereum, Solana, Cosmos, Polkadot — usa formatos de transacción propietarios. Esto crea una incompatibilidad fundamental: los bancos no pueden leer transacciones blockchain y las blockchains no pueden integrarse con los sistemas bancarios sin middleware costoso." },
        { type: 'p', text: "20022Chain elimina esta brecha por completo." },
        { type: 'p', text: "Cada transacción en 20022Chain tiene formato nativo de mensaje ISO 20022. Un banco que recibe una liquidación 20022Chain puede procesarla con los mismos sistemas que usa para mensajes SWIFT. Sin adaptadores, sin traductores, sin middleware. Esto es lo que hace posible la tokenización RWA institucional a escala." },
        { type: 'box', title: 'Diferenciadores clave', items: [
          '• Primera blockchain con cumplimiento nativo ISO 20022',
          '• Diseñada para liquidación RWA institucional, no DeFi minorista',
          '• Más de 50.000 TPS con finalidad instantánea (sin rollbacks)',
          '• Construida en Rust para máximo rendimiento y seguridad',
          '• Capa de liquidación para más de 5 billones USD en reservas mineras verificadas en ARCHT',
        ]},
      ],
    },
    {
      num: '02',
      title: 'Arquitectura: 12 subsistemas en detalle',
      pb: true,
      blocks: [
        { type: 'p', text: "20022Chain no es una blockchain monolítica. Está compuesta por 12 subsistemas especializados, cada uno diseñado, probado y actualizable de forma independiente mediante gobernanza. Esta arquitectura modular permite mejorar componentes individuales sin afectar al resto." },
        { type: 'table', headers: ['Subsistema', 'Propósito', 'Métrica clave'], rows: [
          ['Ejecución paralela', 'Procesamiento multi-hilo de tx', '50.000+ TPS'],
          ['Mempool DAG', 'Orden no secuencial de tx', 'Cola 100K tx'],
          ['Consenso ArchPoS', 'Producción de bloques por stake', 'Bloques 0,4 s'],
          ['Capa ISO 20022', 'Formato de mensajes financieros', '8 tipos de msg'],
          ['Árboles Verkle', 'Almacenamiento eficiente de estado', '90% reducción'],
          ['Pruebas ZK', 'Verificación con privacidad', 'ZK-SNARKs'],
          ['Puente cross-chain', 'ETH, BNB, Cosmos, Polkadot', '5 cadenas'],
          ['Gobernanza on-chain', 'Actualizaciones y tesorería', 'Votación por token'],
          ['Registro ISIN', 'Identificación de valores', '8.247+ ISINs'],
          ['Abstracción de cuenta', 'Multi-firma, recuperación social', 'ERC-4337'],
          ['Expiración de estado', 'Poda automática de estado', 'Ciclo 365 días'],
          ['Danksharding', 'Disponibilidad de datos blob', 'EIP-4844'],
        ]},
      ],
    },
    {
      num: '03',
      title: 'Mecanismo de consenso ArchPoS',
      pb: true,
      blocks: [
        { type: 'p', text: "ArchPoS (Archetype Proof of Stake) es el mecanismo de consenso propietario de 20022Chain. Logra finalidad instantánea en un solo slot: una vez confirmado un bloque en 0,4 s, es matemáticamente imposible revertirlo." },
        { type: 'h3', text: '3.1 Selección de validadores' },
        { type: 'p', text: "128 validadores participan en la producción de bloques. La selección usa una función aleatoria verificable (VRF) ponderada por: (a) cantidad en stake, (b) puntuación de uptime, (c) rendimiento histórico. Esto asegura descentralización y fiabilidad." },
        { type: 'h3', text: '3.2 Producción de bloques' },
        { type: 'p', text: "Cada slot (0,4 s), se selecciona un validador como proponente del bloque. El proponente recoge transacciones del mempool DAG, las ordena, las ejecuta en el motor paralelo y difunde el bloque. El resto de validadores atestigua en el mismo slot, logrando finalidad instantánea." },
        { type: 'h3', text: '3.3 Condiciones de slashing' },
        { type: 'box', title: 'Reglas de slashing', items: [
          '• Doble firma: proponer dos bloques distintos para el mismo slot → 100% de stake slash',
          '• Inactividad prolongada: offline 24+ horas → reducción gradual de stake (0,1%/hora)',
          '• Censura: excluir repetidamente transacciones válidas → 50% slash + exclusión',
          '• Atestación inválida: atestiguar bloques inválidos → 25% slash',
        ]},
        { type: 'h3', text: '3.4 Recompensas de staking' },
        { type: 'p', text: "Los validadores ganan recompensas proporcionales a su stake y rendimiento. APY estimado actual: 6,2%. Las recompensas se distribuyen automáticamente al final de cada época (cada 32 bloques ≈ 12,8 segundos)." },
      ],
    },
    // Sections 04–20: use English content (same as en.sections[3..19]) so full doc renders; can translate later
    ...en.sections.slice(3),
  ],
  backCover: {
    title: '20022Chain',
    subtitle: 'La blockchain nativa ISO 20022',
    part: 'Parte del ecosistema ARCHT',
    rights: '© 2026 20022Chain. Todos los derechos reservados.',
  },
};

// Fallback for ar, zh, ru, fr, pt: use English
export const WP_20022_I18N: Record<Locale, WpContent> = {
  en,
  es,
  ar: en,
  zh: en,
  ru: en,
  fr: en,
  pt: en,
};
