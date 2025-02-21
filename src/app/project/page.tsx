import Link from 'next/link';
import Image from 'next/image';
import img from 'src/images/from.png';
import p2 from 'src/images/p2.png';
import p3 from 'src/images/p3.png';
import p4 from 'src/images/p4.png';
import p5 from 'src/images/p5.png';

export default function Project() {
  return (
    <div className="Project min-h-screen py-10">
      <h1 className="text-3xl sm:text-6xl font-bold text-purple-600 text-center mb-10">MY PROJECTS</h1>

      <div className="flex flex-col justify-center items-center space-y-10 px-4">
        <p className="text-lg max-w-2xl text-center mb-10">Here are some of the projects I worked on during my first year in the WMAD program, including design prototypes in Figma, backend systems, and a URL shortener project developed for a company.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          <Link href="https://from-xi.vercel.app/" className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 block">
            <Image src={img} alt="Survey Form WMAD-2024" width={300} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Survey Form WMAD-2024</h3>
            <p className="text-gray-600">This website was created to conduct surveys for WMAD in 2024, with a simple and user-friendly design to collect and analyze responses efficiently.</p>
          </Link>

          <Link href="https://selling-bicycle.vercel.app/bikes.html" className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 block">
            <Image src={p2} alt="Selling Bicycle" width={300} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Selling Bicycle</h3>
            <p className="text-gray-600">An e-commerce platform for selling bicycles, designed with user-friendly navigation and a responsive layout.</p>
          </Link>

          <Link href="https://minimal-blog-l2pc.vercel.app/" className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 block">
            <Image src={p3} alt="Minimal Blog" width={300} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Minimal Blog</h3>
            <p className="text-gray-600">A minimalistic blog website that offers a clean and simple interface for reading and sharing blog posts, focusing on an uncluttered user experience.</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-10">
          <Link href="https://link-shorten-two-gx8i.vercel.app/" className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 block">
            <Image src={p4} alt="URL Shortener" width={300} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">URL Shortener</h3>
            <p className="text-gray-600">
              Quickly shorten long URLs into shareable links with tracking, custom aliases, and security options.
              Manage all your links easily with an intuitive dashboard.
            </p>
          </Link>


          <Link href="#" className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 block">
            <Image src={p5} alt="Selling Bicycle" width={300} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Blog Post</h3>
            <p className="text-gray-600">
              Read our blog for simple tips, bike guides, and the latest news.
              Learn how to take care of your bike and find the best ones to buy!
            </p>
          </Link>


          {/* <Link href="https://minimal-blog-l2pc.vercel.app/" className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 block">
            <Image src={p3} alt="Minimal Blog" width={300} height={200} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Minimal Blog</h3>
            <p className="text-gray-600">A minimalistic blog website that offers a clean and simple interface for reading and sharing blog posts, focusing on an uncluttered user experience.</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
