import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © Tenpa Bhikshu's Wiki {year}
        </p>
        <p>
          This wiki was created with funding from{" "}
          <a href="https://khyentsefoundation.org/">Khyentse Foundation</a> and is now sponsored by{" "}
          <a href="https://theofferingbowl.com/">Offering Bowl</a>. If you would like to see it
          maintained and expanded, please consider{" "}
          <a href="https://theofferingbowl.com/">donating to Offering Bowl</a>.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
