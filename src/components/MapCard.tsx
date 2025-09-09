import { Card } from "@/components/ui/card";

interface MapCardProps {
  address: string;
}

export default function MapCard({ address }: MapCardProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <Card className="shadow-card overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <p className="text-lg font-medium">Interactive Map</p>
        <p className="text-sm">Google Maps embedded location</p>
        <p className="text-sm mt-2">{address}</p>
      </div>
    </Card>
  );
}
