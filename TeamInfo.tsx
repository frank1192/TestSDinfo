import type React from "react"

interface Team {
  id: string
  name: string
  schedule: string
  coach: string
  location: string
  email: string
}

interface TeamInfoProps {
  team: Team | undefined
}

export const TeamInfo: React.FC<TeamInfoProps> = ({ team }) => {
  if (!team) return null

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">{team.name}</h2>
      <p>
        <strong>Horario de entrenamientos:</strong> {team.schedule}
      </p>
      <p>
        <strong>Nombre del profesor:</strong> {team.coach}
      </p>
      <p>
        <strong>Espacio donde se entrena:</strong> {team.location}
      </p>
      <p>
        <strong>Correo del profesor:</strong> {team.email}
      </p>
    </div>
  )
}

