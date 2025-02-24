"use client"

import { useState } from "react"
import { TeamInfo } from "./TeamInfo"
import { teams } from "./data"
import Image from "next/image"

export default function SportsTeamSelector() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeam, setSelectedTeam] = useState(null)

  // Filtrar los equipos basándose en el término de búsqueda
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Image src="/logoUV.png" alt="Logo" width={50} height={50} className="mr-4" />
        <h1 className="text-2xl font-bold">Selecciona un Equipo Deportivo</h1>
      </div>
      
      {/* Input para buscar equipos */}
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Buscar equipo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista de equipos filtrados */}
      {filteredTeams.length > 0 ? (
        <ul className="border rounded p-2">
          {filteredTeams.map((team) => (
            <li
              key={team.id}
              className="p-2 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => setSelectedTeam(team)}
            >
              {team.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No se encontraron equipos</p>
      )}

      {/* Mostrar la información del equipo seleccionado */}
      {selectedTeam && <TeamInfo team={selectedTeam} />}
    </div>
  )
}
