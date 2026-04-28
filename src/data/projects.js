export const projects = [
  {
    id: "omnicore",
    title: "OmniCore Distribution",
    description: "A high-performance distributed systems architecture designed for global scale, featuring sub-millisecond consensus and auto-healing nodes.",
    details: "OmniCore was built to address the consistency issues in highly partitioned networks. It utilizes a custom implementation of the Raft consensus algorithm optimized for low-latency WAN environments.",
    image: "/project_distributed_systems_1777397773409.png",
    tags: ["Go", "gRPC", "Kubernetes", "Redis"],
    github: "https://github.com/username/omnicore",
    live: "https://omnicore-demo.io",
    challenges: "The primary challenge was maintaining strong consistency without sacrificing availability during network splits. We solved this by implementing a hybrid leader-election mechanism.",
    improvements: "Future plans include adding native support for WASM-based edge compute nodes to reduce latency for end-users."
  },
  {
    id: "neuraldash",
    title: "NeuralDash AI",
    description: "An advanced analytics dashboard leveraging transformer models to provide predictive insights and real-time anomaly detection for fintech data.",
    details: "NeuralDash integrates multiple data streams from financial markets and uses a custom-trained BERT model to perform sentiment analysis and predict market shifts.",
    image: "/project_ai_platform_mockup_1777398130358.png",
    tags: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "https://github.com/username/neuraldash",
    live: "https://neuraldash.ai",
    challenges: "Processing multi-gigabyte data streams in real-time was the biggest hurdle. We implemented a Kafka-based pipeline to decouple data ingestion from model inference.",
    improvements: "We are looking into integrating reinforcement learning to allow the dashboard to suggest optimal trading strategies automatically."
  },
  {
    id: "zerotrust",
    title: "ZeroTrust Shield",
    description: "A comprehensive security framework implementing identity-aware proxying and encrypted tunneling for secure enterprise infrastructure.",
    details: "ZeroTrust Shield provides a seamless overlay network for remote teams, ensuring that every request is authenticated and authorized regardless of the source IP.",
    image: "/code-macro.png",
    tags: ["Rust", "eBPF", "Docker", "WireGuard"],
    github: "https://github.com/username/zerotrust",
    live: "https://shield.security",
    challenges: "The biggest technical challenge was minimizing the overhead of the encrypted tunnel. By using eBPF, we moved the packet filtering into the kernel, drastically improving throughput.",
    improvements: "Planned improvements include a decentralized identity provider integration using blockchain for immutable audit logs."
  }
];
