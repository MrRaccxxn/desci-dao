export const Footer = () => {
    return (
      <footer className='bg-base-200 text-base-content '>
        <div className='container '>
          <div className="footer py-10 md:py-16 grid-cols-2 sm:grid-cols-4 lg:grid-cols-auto">
          <div>
              <span className="footer-title text-md">Useful Links</span>
              <a href="#!" className="link link-hover">About us</a>
              <a href="#!" className="link link-hover">FAQ</a>
              <a href="#!" className="link link-hover">Team</a>
            </div>
            <div>
              <span className="footer-title text-lg">Services</span>
              <a href="#!" className="link link-hover">Create ID SBT</a>
              <a href="#!" className="link link-hover">PDF DAO</a>
              <a href="#!" className="link link-hover">View Onchain PDF Files</a>
            </div>
            <div>
              <span className="footer-title text-base">Legal</span>
              <a href="#!" className="link link-hover">Terms of use</a>
              <a href="#!" className="link link-hover">Privacy policy</a>
              <a href="#!" className="link link-hover">Cookie policy</a>
            </div>
          </div>
  
          <div className='flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2'>
            <div className="flex-grow text-center sm:text-start">
              <p>© 2023 SoulSci, All rights reserved.</p>
            </div>
            <div className="grid grid-flow-col gap-4">
              <a className='link link-success' href='#!'><i className='bi bi-facebook text-xl'></i></a>
              <a className='link link-success' href='#!'><i className='bi bi-instagram text-xl'></i></a>
              <a className='link link-success' href='#!'><i className='bi bi-twitter text-xl'></i></a>
              <a className='link link-success' href='#!'><i className='bi bi-github text-xl'></i></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }