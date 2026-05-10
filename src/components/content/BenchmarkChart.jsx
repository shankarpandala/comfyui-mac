import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

export default function BenchmarkChart({ title, data = [], yLabel = 'it/s' }) {
  return (
    <div className="my-6 rounded-xl border border-zinc-300 dark:border-zinc-700 p-4">
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
            <XAxis dataKey="label" stroke="#a1a1aa" fontSize={11} />
            <YAxis stroke="#a1a1aa" fontSize={11} label={{ value: yLabel, angle: -90, position: 'insideLeft', fill: '#a1a1aa', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: '#18181b', border: '1px solid #3f3f46', color: '#fafafa' }} />
            <Bar dataKey="value" fill="#7c3aed" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
