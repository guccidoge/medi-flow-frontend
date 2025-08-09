"use client";
import { useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MOCK = [
  { id: 1, name: "Hospital A", lat: 3.139, lng: 101.6869, travel: 18, wait: 25 },
  { id: 2, name: "Hospital B", lat: 3.155, lng: 101.71,   travel: 10, wait: 45 },
  { id: 3, name: "Hospital C", lat: 3.124, lng: 101.67,   travel: 27, wait: 10 },
];

export default function Hospitals() {
  const ranked = useMemo(
    () => [...MOCK].map(h => ({...h, total: h.travel + h.wait})).sort((a,b)=>a.total-b.total),
    []
  );

  const { isLoaded } = useJsApiLoader({
    id: "gmap",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = { lat: ranked[0].lat, lng: ranked[0].lng };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Recommended hospitals</h2>
        {ranked.map((h, i) => (
          <div key={h.id}
            className="rounded-xl border bg-white p-4 shadow flex items-center justify-between">
            <div>
              <div className="font-medium">{i+1}. {h.name}</div>
              <div className="text-sm text-slate-600">
                Travel: {h.travel} min • Wait: {h.wait} min
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500">Total time</div>
              <div className="text-xl font-bold">{h.total} min</div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[70vh] rounded-xl overflow-hidden border bg-white">
        {!isLoaded ? (
          <div className="w-full h-full grid place-items-center text-slate-600">Loading map… (set API key)</div>
        ) : (
          <GoogleMap mapContainerStyle={{width:"100%", height:"100%"}}
                     center={center} zoom={12}>
            {ranked.map(h => (
              <Marker key={h.id} position={{lat:h.lat, lng:h.lng}} title={h.name}/>
            ))}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}
