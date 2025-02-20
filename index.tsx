"use client"

import { useState } from "react"
import { TeamInfo } from "./TeamInfo"
import { teams } from "./data"
import Image from "next/image"

export default function SportsTeamSelector() {
  const [selectedTeam, setSelectedTeam] = useState("")

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Image src="/logoUV.png" alt="Logo" width={50} height={50} className="mr-4" />
        <h1 className="text-2xl font-bold">Selecciona un Equipo Deportivo</h1>
      </div>
      <select
        className="w-full p-2 mb-4 border rounded"
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        <option value="">Selecciona un equipo</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      {selectedTeam && <TeamInfo team={teams.find((t) => t.id === selectedTeam)} />}
    </div>
  )
}

