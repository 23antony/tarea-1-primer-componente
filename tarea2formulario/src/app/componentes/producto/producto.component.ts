import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[];
  nuevoProducto: Producto;
  mostratProductos: Boton;

  constructor() { }

  ngOnInit() {
    this.productos = [];
    this.nuevoProducto = {
        nombre: '',
        precio: 0,
        fechaVencimiento: '',
        existencia: 0
    };
    this.mostratProductos = {estado: false, rotulo: 'Mostrar Productos'};
  }

  agregarProducto(formulario) {

   const producto = {
     nombre: formulario.nombre.value,
       precio: formulario.precio.value,
       fechaVencimiento: formulario.fecha_vencimiento.value,
       existencia: formulario.existencia.value
   };

   this.productos.push(producto);

   this.nuevoProducto = {
       nombre: '',
       precio: 0,
       fechaVencimiento: '',
       existencia: 0
   };
    return false;
  }

  mostrarProductosHandler() {
    this.mostratProductos.estado = !this.mostratProductos.estado;
    if (this.mostratProductos.estado) {
      this.mostratProductos.rotulo = 'Ocultar Productos';
    } else {
        this.mostratProductos.rotulo = 'Mostrar Productos';
    }
  }

}

interface Producto {
    nombre: string;
    precio: number;
    fechaVencimiento: string;
    existencia: number;
}

interface Boton {
    estado: boolean;
    rotulo: string;
}
