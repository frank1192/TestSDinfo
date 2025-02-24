"use client"

import { useState } from "react"
import { TeamInfo } from "./TeamInfo"
import { teams } from "./data"
import Image from "next/image"

export default function SportsTeamSelector() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)

  // Filtrar equipos según el término de búsqueda
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelectTeam = (team) => {
    setSearchTerm(team.name) // Coloca el nombre en el input
    setSelectedTeam(team) // Guarda el equipo seleccionado
    setShowDropdown(false) // Oculta la lista desplegable
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Image src="/logoUV.png" alt="Logo" width={50} height={50} className="mr-4" />
        <h1 className="text-2xl font-bold">Selecciona un Equipo Deportivo</h1>
      </div>
      
      {/* Input para buscar equipos */}
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Buscar equipo..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setShowDropdown(true) // Muestra la lista si se está escribiendo
          }}
          onFocus={() => setShowDropdown(true)} // Muestra la lista cuando se hace foco
        />

        {/* Lista desplegable de equipos filtrados */}
        {showDropdown && filteredTeams.length > 0 && (
          <ul className="absolute w-full border rounded bg-white shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
            {filteredTeams.map((team) => (
              <li
                key={team.id}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectTeam(team)}
              >
                {team.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mostrar la información del equipo seleccionado */}
      {selectedTeam && <TeamInfo team={selectedTeam} />}
    </div>
  )
}
