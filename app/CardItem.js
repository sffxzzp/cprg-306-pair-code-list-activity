'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function CardItem({
  id,
  title,
  subtitle,
  description,
  price,
  category,
  imgPath,
  cta,
}) {
  return (
    <article className="mx-auto my-4 max-w-md overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={imgPath}
          alt={`${title} image`}
          fill
          className="h-full w-full object-cover"
        />
      </div>
      {/* Title 和 Subtitle 另起一行 */}
      <div className="border-b p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mb-2 text-sm text-gray-600">
          <strong>{subtitle}</strong>
        </p>
      </div>
      <div className="p-4">
        <p className="mb-4 text-gray-700">{description}</p>
        <div className="flex gap-2">
          {/* The Link will follow up to a separate dynamic route that we'll make in a later lab */}
          <Link
            href="#"
            className="rounded bg-blue-600 px-4 py-1 text-white transition hover:bg-blue-700"
          >
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
