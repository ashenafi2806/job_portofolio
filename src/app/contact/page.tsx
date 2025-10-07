import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {/* Location Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <div className="text-red-500 text-sm font-semibold mb-2 tracking-wide">LOCATION..</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us At</h3>
          <p className="text-gray-500 leading-relaxed">
            Addis Ababa,
            <br />
            Ethiopia
          </p>
        </div>

        {/* 24*7 Service Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <div className="text-red-500 text-sm font-semibold mb-2 tracking-wide">24*7 SERVICE..</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us On</h3>
          <p className="text-gray-500 leading-relaxed">
            Tel : +251927423606
            <br />
            Tel : +251953442540
          </p>
        </div>

        {/* Drop a Line Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <div className="text-red-500 text-sm font-semibold mb-2 tracking-wide">DROP A LINE..</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Mail Address</h3>
          <p className="text-gray-500 leading-relaxed">
            ekefelegn1488@gmail.com
            <br />
            feventadele9@gmail.com
          </p>
        </div>

        {/* Office Hours Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <div className="text-red-500 text-sm font-semibold mb-2 tracking-wide">OFFICE HOURS..</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Opening Time</h3>
          <p className="text-gray-500 leading-relaxed">
            Mon – sat: 9am – 6pm
            <br />
            Sunday (Closed)
          </p>
        </div>
      </div>
    </div>
  )
}
