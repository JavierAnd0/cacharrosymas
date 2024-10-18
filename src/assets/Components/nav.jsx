import React from 'react';
import { Menu, Container, Input, Icon } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu borderless fixed='top' size='large'>
      <Container>
        {/* Logo */}
        <Menu.Item header>
          <Icon name='shopping bag' size='large' />
          <span style={{ marginLeft: '10px', fontSize: '1.5em', fontWeight: 'bold' }}>
            E-Shop
          </span>
        </Menu.Item>

        {/* Links de navegación */}
        <Menu.Item name='home'>Inicio</Menu.Item>
        <Menu.Item name='products'>Productos</Menu.Item>
        <Menu.Item name='contact'>Contacto</Menu.Item>

        {/* Buscador */}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Buscar productos...' />
          </Menu.Item>

          {/* Icono del carrito */}
          <Menu.Item>
            <Icon name='shopping cart' size='large' />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
