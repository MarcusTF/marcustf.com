import { ReactNode } from "react"

export type DynamicNavigationProps = {
  path: string
}

export type DynamicNavigationComponent = (props: DynamicNavigationProps) => ReactNode
