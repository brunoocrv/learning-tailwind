import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'

import { NavItems } from '../NavItems'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItems title="Home" icon={Home} />
      <NavItems title="Dashboard" icon={BarChart} />
      <NavItems title="Projects" icon={SquareStack} />
      <NavItems title="Tasks" icon={CheckSquare} />
      <NavItems title="Reporting" icon={Flag} />
      <NavItems title="Users" icon={Users} />
    </nav>
  )
}
