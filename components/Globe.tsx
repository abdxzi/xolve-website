'use client';
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function GlobeAnimation() {
    //     const canvasRef = useRef<HTMLCanvasElement | null>(null);

    //     useEffect(() => {
    //       let phi = 0;

    //       const globe = createGlobe(canvasRef.current!, {
    //         devicePixelRatio: 2,
    //         width: 1000 * 2,
    //         height: 600 * 2,
    //         phi: 0,
    //         theta: 0,
    //         dark: 1,
    //         diffuse: 1.2,
    //         mapSamples: 16000,
    //         mapBrightness: 6,
    //         baseColor: [0.3, 0.3, 0.3],
    //         markerColor: [0.1, 0.8, 1],
    //         glowColor: [8/255, 25/255, 73/255],
    // markers: [
    //   // longitude latitude
    //   { location: [37.7595, -122.4367], size: 0.03 },
    //   { location: [40.7128, -74.006], size: 0.1 }
    // ],
    //         opacity:0.77,
    //         onRender: (state) => {
    //           // Called on every animation frame.
    //           // `state` will be an empty object, return updated params.
    //           state.phi = phi;
    //           phi += 0.001;
    //         }, 
    //         // scale: 2,
    //       });

    //       return () => {
    //         globe.destroy();
    //       };
    //     }, []);

    //     return (
    //         <canvas
    //           ref={canvasRef}
    //           style={{ width: '100%', height: '600px', aspectRatio: 1 }}
    //         />
    //     );
    //   }
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        let width = 0;
        let phi = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        console.log(canvasRef.current?.offsetWidth)

        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2 * 0.4,
            phi: 0,
            theta: -.1,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.2,
            // baseColor: [1, 1, 1],
            baseColor: [138 / 255, 127 / 255, 204 / 255],
            markerColor: [1, 1, 1],
            glowColor: [9 / 255, 14 / 255, 78 / 255],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.07 },
                { location: [28.679079, 77.069710], size: 0.06 },
            ],
            scale: 2.5,
            offset: [0, width * 2 * 0.4 * (width > 600 ? 0.5 : 0.6)],
            onRender: (state) => {
                state.width = width * 2 
                state.height = width * 2 * (width > 600 ? 0.4 : 0.45)

                state.phi = phi;
                phi += 0.001;

            }, opacity: 0.77,
        })
        setTimeout(() => canvasRef.current!.style.opacity = '1')
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [])
    return <div style={{
        width: '100%',
        aspectRatio: 1 / .4,
        margin: 'auto',
        position: 'relative',
    }}>
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                opacity: 0,
                transition: 'opacity 1s ease',
            }}
        />
    </div>
}
