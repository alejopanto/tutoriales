<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class DataPBController extends Controller
{
    
    public function dataProductos()
    {
        $products = DB::table('productos')
            ->select('id', 'nombre', 'codigo', 'existencia', 'descripcion', 'estado', 'id_bodega')
            ->get();
        // dd($products);

        return response()->json($products, 200);        
    }

    public function dataProductosPost(Request $request)
    {
        // Log::info($request);
        $producto = new Producto();
        $producto -> nombre = $request['nombre'];
        $producto -> codigo = $request['codigo'];
        $producto -> existencia = $request['existencia'];
        $producto -> id_bodega = $request['id_bodega'];
        $producto -> descripcion = $request['descripcion'];
        $producto -> estado = $request['estado'];
        $producto -> save();

        return response()->json($producto, 200);
    }

    public function dataProductosPut(Request $request)
    {
        Log::info($request);
        $producto = Producto::find($request['id']);
        $producto -> nombre = $request['nombre'];
        $producto -> codigo = $request['codigo'];
        $producto -> existencia = $request['existencia'];
        $producto -> id_bodega = $request['id_bodega'];
        $producto -> descripcion = $request['descripcion'];
        $producto -> estado = $request['estado'];
        $producto -> save();

        return response()->json($producto, 200);
    }

    public function dataBodegas()
    {
        $bodegas = DB::table('bodegas')
            ->select('id', 'nombre')
            ->get();
        // dd($bodegas);

        return ($bodegas);        
    }
   
}
