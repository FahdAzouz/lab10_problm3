
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Lab 10.3: Next.js Framework Implementation
        </h1>

        <div className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Installation Process</h2>
          <ol className="space-y-4">
            <li className="ml-4">
              <span className="font-semibold">1. Environment Setup:</span>
              <p className="mt-2">
                First, I ensured Node.js was installed on my system. I used Node.js version 18.17.0 which is recommended for Next.js 13.
              </p>
            </li>
            <li className="ml-4">
              <span className="font-semibold">2. Project Creation:</span>
              <p className="mt-2">
                I created a new Next.js project using the following command in the terminal:
                <code className="block bg-gray-800 text-white p-3 rounded-md mt-2">
                  npx create-next-app@latest .\
                </code>
              </p>
            </li>
            <li className="ml-4">
              <span className="font-semibold">3. Configuration Selection:</span>
              <p className="mt-2">
                During setup, I selected the following options:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>TypeScript: No</li>
                <li>ESLint: Yes</li>
                <li>Tailwind CSS: Yes</li>
                <li>App Router: Yes</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">Building the Page</h2>
          <div className="space-y-4">
            <p>
              The page building process involved several steps:
            </p>
            <ol className="space-y-4">
              <li className="ml-4">
                <span className="font-semibold">1. Project Structure:</span>
                <p className="mt-2">
                  I organized the project using Next.js&apos;s app directory structure, creating the main page in the app directory.
                </p>
              </li>
              <li className="ml-4">
                <span className="font-semibold">2. Component Development:</span>
                <p className="mt-2">
                  Created the page using React and styled it with Tailwind CSS for a clean, modern look.
                </p>
              </li>
              <li className="ml-4">
                <span className="font-semibold">3. Deployment:</span>
                <p className="mt-2">
                  Deployed the application using Vercel&apos;s platform, which provides excellent integration with Next.js projects.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Challenges and Solutions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-red-600">Challenge 1: Development Environment</h3>
              <p className="mt-2">
                Initially faced issues with Node.js version compatibility. Solved by updating Node.js to the latest LTS version using nvm (Node Version Manager).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600">Challenge 2: Styling Integration</h3>
              <p className="mt-2">
                Had some difficulties with Tailwind CSS configuration. Resolved by carefully following the official documentation and ensuring proper PostCSS configuration.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600">Challenge 3: Deployment</h3>
              <p className="mt-2">
                Encountered issues with environment variables during deployment. Fixed by properly configuring environment variables in the Vercel dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}