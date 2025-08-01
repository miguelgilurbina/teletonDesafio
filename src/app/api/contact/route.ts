import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('Formulario recibido:', data);
    
    // Aquí puedes agregar integración con email service
    
    return NextResponse.json({ 
      success: true, 
      message: 'Formulario recibido correctamente' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error procesando formulario' },
      { status: 500 }
    );
  }
}