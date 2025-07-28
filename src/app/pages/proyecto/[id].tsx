// // ELENA STANDALONE APP ARCHITECTURE

// // 1. PÁGINA PRINCIPAL: pages/proyecto/[id].tsx
// import { useState, useEffect } from "react";
// import ElenaChat from "@/components/ElenaChat";
// import ProgressTracker from "@/components/ProgressTracker";
// import AssetUploader from "@/components/AssetUploader";

// export default function ProyectoPage({ proyectoId }: { proyectoId: string }) {
//   const [chatData, setChatData] = useState({});
//   const [assets, setAssets] = useState([]);
//   const [completitud, setCompletitud] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/5">
//       {/* Header con branding */}
//       <header className="border-b bg-white/80 backdrop-blur">
//         <div className="container mx-auto px-4 py-4">
//           <h1 className="text-2xl font-bold">
//             Tu Página Web - Proceso de Diseño
//           </h1>
//           <p className="text-gray-600">Proyecto: {proyectoId}</p>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Columna principal: Chat con Elena */}
//           <div className="lg:col-span-2">
//             <ElenaChat
//               proyectoId={proyectoId}
//               onDataUpdate={setChatData}
//               onComplete={(data) => handleChatComplete(data)}
//             />
//           </div>

//           {/* Sidebar: Progress + Assets */}
//           <div className="space-y-6">
//             <ProgressTracker
//               completitud={completitud}
//               requirements={[
//                 "Información del negocio",
//                 "Servicios y productos",
//                 "Preferencias de diseño",
//                 "Información de contacto",
//                 "Logo (archivo)",
//                 "Fotos del negocio",
//                 "Contenido específico",
//               ]}
//             />

//             <AssetUploader
//               proyectoId={proyectoId}
//               onUpload={setAssets}
//               requiredAssets={["logo", "fotos", "contenido"]}
//             />

//             {/* Botón de finalización */}
//             {isComplete && (
//               <button
//                 onClick={submitProject}
//                 className="w-full bg-accent text-white py-4 rounded-lg font-bold"
//               >
//                 ✅ Enviar Información Completa
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // 2. COMPONENTE ELENA CHAT: components/ElenaChat.tsx
// import { useState } from "react";

// export default function ElenaChat({ proyectoId, onDataUpdate, onComplete }) {
//   const [messages, setMessages] = useState([
//     {
//       role: "elena",
//       content:
//         "¡Hola! Soy Elena, tu consultora en branding digital. Vamos a crear juntos la página web perfecta para tu negocio. ¿Cuál es tu nombre y qué te apasiona de tu negocio?",
//     },
//   ]);
//   const [currentInput, setCurrentInput] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);

//   const sendMessage = async () => {
//     if (!currentInput.trim()) return;

//     // Agregar mensaje del usuario
//     const newMessages = [...messages, { role: "user", content: currentInput }];
//     setMessages(newMessages);
//     setIsProcessing(true);

//     try {
//       // Llamada a Claude API con prompt de Elena
//       const response = await fetch("/api/elena/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           proyectoId,
//           messages: newMessages,
//           elenaPrompt: ELENA_FULL_PROMPT,
//         }),
//       });

//       const data = await response.json();

//       // Agregar respuesta de Elena
//       setMessages([...newMessages, { role: "elena", content: data.response }]);

//       // Actualizar datos extraídos
//       onDataUpdate(data.extractedData);

//       // Verificar si está completo
//       if (data.isComplete) {
//         onComplete(data.finalData);
//       }
//     } catch (error) {
//       console.error("Error Elena:", error);
//     }

//     setIsProcessing(false);
//     setCurrentInput("");
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg h-[600px] flex flex-col">
//       {/* Chat messages */}
//       <div className="flex-1 p-6 overflow-y-auto space-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.role === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-[80%] p-4 rounded-lg ${
//                 msg.role === "user"
//                   ? "bg-accent text-white"
//                   : "bg-gray-100 text-gray-800"
//               }`}
//             >
//               {msg.content}
//             </div>
//           </div>
//         ))}

//         {isProcessing && (
//           <div className="flex justify-start">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <div className="animate-pulse">Elena está escribiendo...</div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input area */}
//       <div className="border-t p-4 flex gap-2">
//         <input
//           value={currentInput}
//           onChange={(e) => setCurrentInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Escribe tu respuesta..."
//           className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
//           disabled={isProcessing}
//         />
//         <button
//           onClick={sendMessage}
//           disabled={isProcessing || !currentInput.trim()}
//           className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50"
//         >
//           Enviar
//         </button>
//       </div>
//     </div>
//   );
// }

// // 3. API ENDPOINT: pages/api/elena/chat.ts
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") return res.status(405).end();

//   const { proyectoId, messages, elenaPrompt } = req.body;

//   try {
//     // Llamada a Claude API
//     const response = await fetch("https://api.anthropic.com/v1/messages", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": process.env.CLAUDE_API_KEY,
//       },
//       body: JSON.stringify({
//         model: "claude-3-sonnet-20240229",
//         max_tokens: 1000,
//         messages: [
//           { role: "system", content: elenaPrompt },
//           ...messages.map((msg) => ({
//             role: msg.role === "elena" ? "assistant" : "user",
//             content: msg.content,
//           })),
//         ],
//       }),
//     });

//     const data = await response.json();
//     const elenaResponse = data.content[0].text;

//     // Extraer datos estructurados (Elena debe devolver JSON + respuesta)
//     const extractedData = extractStructuredData(elenaResponse);
//     const isComplete = validateCompleteness(extractedData);

//     // Guardar progreso en base de datos
//     await saveProgress(proyectoId, extractedData, isComplete);

//     // Si está completo, enviar email de notificación
//     if (isComplete) {
//       await sendCompletionEmail(proyectoId, extractedData);
//     }

//     res.json({
//       response: elenaResponse,
//       extractedData,
//       isComplete,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Error procesando con Elena" });
//   }
// }

// // 4. VALIDACIÓN DE COMPLETITUD
// function validateCompleteness(data: any): boolean {
//   const required = [
//     "client_info.name",
//     "client_info.business_name",
//     "brand.personality",
//     "services",
//     "contact.email",
//     "contact.phone",
//     "assets.logo.has_logo",
//     "assets.images.profile_photos.available",
//   ];

//   return required.every((path) => getNestedValue(data, path));
// }

// // 5. EMAIL DE NOTIFICACIÓN
// async function sendCompletionEmail(proyectoId: string, data: any) {
//   const emailContent = `
//     ✅ PROYECTO COMPLETO: ${proyectoId}

//     Cliente: ${data.client_info.name}
//     Negocio: ${data.client_info.business_name}

//     📄 INFORMACIÓN COMPLETA RECIBIDA
//     📎 ASSETS SUBIDOS

//     🚀 PUEDE COMENZAR DESARROLLO (7 días inician AHORA)

//     Ver detalles: elena.tuweben7dias.com/admin/${proyectoId}
//   `;

//   await sendEmail({
//     to: "miguel@tuweben7dias.com",
//     subject: `🚀 Proyecto ${proyectoId} - LISTO PARA DESARROLLO`,
//     text: emailContent,
//   });
// }
