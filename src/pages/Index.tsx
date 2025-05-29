import Counter from '@/components/Counter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">React Counter App</h1>
        <p className="text-xl text-muted-foreground">A simple counter built with React and Shadcn UI</p>
      </div>
      <div className="bg-card p-8 rounded-lg shadow-lg border">
        <Counter initialValue={0} />
      </div>
    </div>
  );
};

export default Index;