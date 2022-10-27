import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"
import * as S from "./styled"

const NavbarLinks = () => {
  return (
    <>
      <S.MenuContainer>
        <S.Dropdown>
          <S.DropdownItem>
            <S.DropdownLink fade to="/quem-somos/">
              Sobre Nós
            </S.DropdownLink>
          </S.DropdownItem>

          <S.DropdownItem>
            <span>Serviços</span>
            <S.Arrow />
            <S.DropdownSubMenu>
              <S.DropdownSubMenuItem>
                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/demand-generation/">
                      Demand Generation B2B
                    </S.DropdownSubMenuLink>
                    {/* <S.DropdownSubMenuLink fade to="/abm/">
                      ABM
                    </S.DropdownSubMenuLink> */}
                    <S.DropdownSubMenuLink fade to="/abm/">
                      ABM - Guia Completo
                    </S.DropdownSubMenuLink>
                    {/* <S.DropdownSubMenuLink fade to="/martech/">
                      Martech
                    </S.DropdownSubMenuLink> */}
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/consulting/">
                      Consulting
                    </S.DropdownSubMenuLink>
                    {/* <S.DropdownSubMenuLink fade to="/data-intelligence/">
                      Business Intelligence
                    </S.DropdownSubMenuLink> */}
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink style={{ display: "none" }}>
                  <S.DropdownSubMenuLink>Colab Ventures</S.DropdownSubMenuLink>
                </S.SubmenuLink>
              </S.DropdownSubMenuItem>
            </S.DropdownSubMenu>
          </S.DropdownItem>

          <S.DropdownItem>
            <span>Produtos</span>
            <S.Arrow />
            <S.DropdownSubMenu>
              <S.DropdownSubMenuItem>
                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="https://wedash.digital/">
                      WeDash
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="https://harpoon.digital/">
                      Harpoon
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>
              </S.DropdownSubMenuItem>
            </S.DropdownSubMenu>
          </S.DropdownItem>

          <S.DropdownItem>
            <span>Carreiras</span>
            <S.Arrow />

            <S.DropdownSubMenu>
              <S.DropdownSubMenuItem>
                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/carreiras/nossos-times/">
                      Nossos Times
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/carreiras/cultura/">
                      Cultura
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/carreiras/carreira/">
                      Seja um bower
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>
              </S.DropdownSubMenuItem>
            </S.DropdownSubMenu>
          </S.DropdownItem>

          <S.DropdownItem>
            <S.DropdownLink fade to="/blog/">
              Conteúdos
            </S.DropdownLink>
          </S.DropdownItem>

          <S.DropdownItem onClick={() => scrollTo("#contact")}>
            <S.DropdownLink>Contato</S.DropdownLink>
          </S.DropdownItem>

          <S.DropdownItem style={{ display: "none" }}>
            <span>Quem Somos</span>
            <S.Arrow />

            <S.DropdownSubMenu>
              <S.DropdownSubMenuItem>
                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/quem-somos">
                      Sobre Nós
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/carreiras/nossos-times/">
                      Nossos Times
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/carreiras/cultura/">
                      Cultura
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>

                <S.SubmenuLink>
                  <S.SubmenuItem>
                    <S.DropdownSubMenuLink fade to="/carreiras/">
                      Seja um bower
                    </S.DropdownSubMenuLink>
                  </S.SubmenuItem>
                </S.SubmenuLink>
              </S.DropdownSubMenuItem>
            </S.DropdownSubMenu>
          </S.DropdownItem>
        </S.Dropdown>
      </S.MenuContainer>
    </>
  )
}

export default NavbarLinks
