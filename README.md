# Vinny AI - Your AI Chat Companion

An open-source AI chat companion built with Next.js and Supabase.

## Features

- 💬 Real-time chat interface
- 🤖 AI-powered responses
- 🔐 Secure authentication with Supabase
- 📱 Fully responsive design
- 🚀 Fast and scalable

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Take-A-Walk-With-Vinny/vinny-ai.git
cd vinny-ai
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://mrjdkisleezugfboccbm.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_qp6SR13b-Qk2oIVg1yg7Fg_stb7JLOw
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Railway (Recommended - Free Tier)

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select this repository
4. Add environment variables from `.env.local`
5. Deploy!

Your app will be live at a Railway-assigned URL instantly.

### Fly.io

1. Install [flyctl](https://fly.io/docs/getting-started/installing-flyctl/)
2. Run: `fly launch`
3. Add environment variables
4. Run: `fly deploy`

## Custom Domain

Once deployed on Railway or Fly.io, you can add a custom domain in the platform settings.

## Contributing

Contributions welcome! Feel free to open issues and pull requests.

## License

Open source - feel free to use and modify.

---

**Chat with Vinny:** [Live Demo](#) (Add your deployment URL here)
