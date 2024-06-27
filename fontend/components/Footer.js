import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-1 fixed bottom-0 w-full">
            <div className="container mx-auto px-4 flex justify-center items-center space-x-4">
                <a href="https://wa.me/967773610341" className="flex items-center space-x-2">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="text-white">
                    <path d="M17.472 14.382c-.297-.149-1.757-.867-2.028-.967-.271-.099-.468-.149-.666.15-.197.297-.767.967-.939 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.173.198-.297.297-.496.099-.198.05-.372-.025-.521-.075-.148-.666-1.612-.916-2.21-.242-.579-.487-.5-.666-.51-.173-.007-.372-.009-.571-.009s-.521.074-.794.372c-.272.297-1.042 1.018-1.042 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.201 5.072 4.486.709.306 1.26.489 1.691.625.711.226 1.358.194 1.871.118.571-.085 1.757-.719 2.007-1.413.248-.694.248-1.29.173-1.413-.074-.123-.271-.198-.571-.347m-5.472 5.618c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5m0-16c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5"/>
                    </svg>
                    <span>Whatsapp</span>
                </a>
                <a className="flex items-center space-x-2" href="https://www.linkedin.com/in/ebrahim-alnhdi-688737303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                    <path d="M22.23 0H1.77A1.76 1.76 0 000 1.77v20.46A1.76 1.76 0 001.77 24h20.46A1.76 1.76 0 0024 22.23V1.77A1.76 1.76 0 0022.23 0zM7.12 20.45H3.56V8.92h3.56zM5.34 7.41A2.07 2.07 0 113.27 5.34a2.07 2.07 0 012.07 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.88-3.07-1.89 0-2.18 1.48-2.18 3v5.67h-3.56V8.92h3.42v1.57h.05a3.75 3.75 0 013.37-1.85c3.61 0 4.28 2.38 4.28 5.47v6.34z"/>
                    </svg>
                    <span>LinkedIn</span>
                </a>
            </div>
        </footer>
    );
    }
    