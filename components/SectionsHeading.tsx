

type SectionsHeadingPorps = {
    children: React.ReactNode;
}
export default function SectionsHeading ({children}:SectionsHeadingPorps) {
  return (
      <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}
